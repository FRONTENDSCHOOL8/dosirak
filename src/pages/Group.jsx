import Spinner from '@/components/atom/common/Spinner';
import MainNavBar from '@/components/molecule/common/MainNavBar';
import NavBar from '@/components/molecule/navbar/NavBar';
import PopularGroup from '@/pages/PopularGroup';
import RecentGroup from '@/pages/RecentGroup';
import MyGroup from '@/pages/MyGroup';
import { useInterSectionObserver, useLoginUserInfo } from '@/hook';
import { getPbImage, pb } from '@/util';
import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import { useRef, useEffect } from 'react';
import { useParams, Outlet, useLoaderData } from 'react-router-dom';
import ScrollTop from '@/components/atom/common/ScrollTop';

const INITIAL_PAGE = 1;
const PER_PAGE = 15;

const groupPath = [
  { path: '/group/popular', children: '인기' }, // => item
  { path: '/group/recent', children: '최신' }, // => item
  { path: '/group/mygroup', children: '내 모임' }, // => item
];

// Path에 따라 다른 컴포넌트를 렌더링
const getGroupComponent = (groupType, groupItems, likeItems) => {
  switch (groupType) {
    case 'popular':
      return <PopularGroup likeData={likeItems} participateData={groupItems} />;
    case 'recent':
      return <RecentGroup groupItems={groupItems} />;
    case 'mygroup':
      return <MyGroup groupItems={groupItems} />;
    default:
      return null;
  }
};

export const Component = () => {
  const userInfo = useLoginUserInfo();
  const loadedGroupsData = useLoaderData();
  const { groupType } = useParams();
  const queryOptions = setQueryOptions(groupType, userInfo.id);

  // Like
  const { data: cachedLikeData } = useQuery({
    queryKey: ['like'],
    queryFn: fetchLikes,
    initialData: loadedGroupsData.likeInfoData,
    staleTime: 1000 * 5,
  });

  const likeItems = cachedLikeData ? cachedLikeData.items : [];

  // Popular, Recent, My Group
  const {
    data: cachedGroupsData,
    hasNextPage,
    fetchNextPage,
    refetch,
    status,
  } = useInfiniteQuery({
    ...queryOptions,
    initialData: loadedGroupsData.infiniteInfoData,
    staleTime: 1000 * 5,
  });

  const groupsData = cachedGroupsData ? cachedGroupsData.pages : [];
  const groupItems = groupsData
    .map((groupsData) => groupsData.items)
    .flatMap((groupItems) => groupItems);

  const [observe, unobserve] = useInterSectionObserver(fetchNextPage);
  const observeTarget = useRef(null);

  useEffect(() => {
    if (observeTarget.current && hasNextPage) {
      observe(observeTarget.current);
    } else if (observeTarget.current) {
      unobserve(observeTarget.current);
    }
  }, [observe, unobserve, hasNextPage, observeTarget.current]);

  return status === 'loading' ? (
    <Spinner textArray={['도시락 포장 중...', '도시락 동료 찾는 중...']} />
  ) : (
    <>
      <section className="relative flex h-fit min-h-screen flex-col overflow-x-hidden">
        <header>
          <NavBar type="group" path={groupPath}>
            모임
          </NavBar>
        </header>
        <main className="mx-9 mb-12">
          {getGroupComponent(groupType, groupItems, likeItems)}
          <div ref={observeTarget} aria-hidden="true">
            &nbsp;
          </div>
          <Outlet />
        </main>
        <ScrollTop />
      </section>
      <MainNavBar />
    </>
  );
};

const fetchGroups = (groupType, userId) => async (groupInfo) => {
  const collection = {
    popular: {
      collection: 'groups_popular',
      sortField: 'i_participate_it',
      filter: '',
    },
    recent: { collection: 'groups', sortField: 'created', filter: '' },
    mygroup: {
      collection: 'groups',
      sortField: 'created',
      filter: `participant.id ?= "${userId}"`,
    },
  };
  const collectionType = collection[groupType];

  const groups = await pb
    .collection(collectionType.collection)
    .getList(groupInfo.pageParam, PER_PAGE, {
      sort: `-${collectionType.sortField}`,
      expand: 'participant',
      filter: collectionType.filter,
    });

  const groupItems = groups.items.map((group) => {
    const groupImageData = {
      collectionId: group.collectionId,
      id: group.id,
      thumbnail: group.thumbnail,
    };

    const groupThumbnail = getPbImage(groupImageData);
    group.thumbnail = groupThumbnail;

    return group;
  });

  return {
    ...groups,
    items: groupItems,
  };
};

const fetchLikes = async () => {
  const likes = await pb.collection('groups_popular').getList(1, 5, {
    sort: '-i_like_it',
    filter: '',
  });

  const likeItems = likes.items.map((like) => {
    const likeImageData = {
      collectionId: like.collectionId,
      id: like.id,
      thumbnail: like.thumbnail,
    };

    const likeThumbnail = getPbImage(likeImageData);
    like.thumbnail = likeThumbnail;

    return like;
  });

  return {
    ...likes,
    items: likeItems,
  };
};

const fetchInfiniteQuery = async (groupType, queryClient, userId) => {
  let groupsData = null;

  const cachedGroupsData = queryClient.getQueryData(['group']);

  const queryOptions = setQueryOptions(groupType, userId);

  // 캐싱된 모임 데이터가 있을 경우
  if (cachedGroupsData) {
    groupsData = cachedGroupsData;
  }
  // 캐싱된 모임 데이터가 없을 경우
  else {
    groupsData = await queryClient.fetchInfiniteQuery(queryOptions);
  }

  return groupsData;
};

const fetchLikeQuery = async (queryClient) => {
  let likesData = null;

  const cachedLikesData = queryClient.getQueryData(['group', 'like']);

  const queryOptions = {
    queryKey: ['group', 'like'],
    queryFn: fetchLikes,
  };

  // 캐싱된 모임 데이터가 있을 경우
  if (cachedLikesData) {
    likesData = cachedLikesData;
  }
  // 캐싱된 모임 데이터가 없을 경우
  else {
    likesData = await queryClient.fetchQuery(queryOptions);
  }

  return likesData;
};

const setQueryOptions = (groupType, userId) => ({
  queryKey: ['group', groupType],
  queryFn: fetchGroups(groupType, userId),
  initialPageParam: INITIAL_PAGE,
  getNextPageParam: (lastPage, allPages) => {
    return lastPage.page < lastPage.totalPages ? allPages.length + 1 : null;
  },
});

export const loader =
  (queryClient) =>
  async ({ params }) => {
    const { groupType } = params;

    const sessionUser = JSON.parse(sessionStorage.getItem('loginUserInfo'));
    const rememberUser = JSON.parse(localStorage.getItem('loginUserInfo'));

    const currentUserId = sessionUser.state.loginUser.id
      ? sessionUser.state.loginUser.id
      : rememberUser.state.loginUser.id;

    let likeInfoData = null;

    // 인기 like만 쿼리
    if (groupType === 'popular') {
      likeInfoData = await fetchLikeQuery(queryClient);
    }

    // [인기, 최신, 내 모임] 공통 인피니트 쿼리
    const infiniteInfoData = await fetchInfiniteQuery(
      groupType,
      queryClient,
      currentUserId
    );

    return {
      likeInfoData,
      infiniteInfoData,
    };
  };

Component.displayName = 'Group';
