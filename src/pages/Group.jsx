import MainNavBar from '@/components/molecule/common/MainNavBar';
import NavBar from '@/components/molecule/navbar/NavBar';
import TitleText from '@/components/atom/common/TitleText';
import GroupListCard from '@/components/organism/group/GroupListCard';
import GroupPopularCard from '@/components/organism/group/GroupPopularCard';
import { Outlet } from 'react-router-dom';
import { getPbImage, pb } from '@/util';
import { useInfiniteQuery } from '@tanstack/react-query';
import { useLoaderData } from 'react-router-dom';

const INITIAL_PAGE = 1;
const PER_PAGE = 5;

const groupPath = [
  { path: '/group/popular', children: '인기' }, // => item
  { path: '/group/recent', children: '최신' }, // => item
  { path: '/group/mygroup', children: '내 모임' }, // => item
];

export const Component = () => {
  const loadedGroupsData = useLoaderData();

  const {
    data: cachedGroupsData,
    hasNextPage,
    fetchNextPage,
    status,
  } = useInfiniteQuery({
    ...queryOptions,
    initialData: loadedGroupsData,
    staleTime: 1000 * 5,
  });

  const groupsData = cachedGroupsData ? cachedGroupsData.pages : [];
  const groupItems = groupsData
    .map((groupsData) => groupsData.items)
    .flatMap((groupItems) => groupItems);

  return status === 'loading' ? (
    <Spinner
      textArray={[
        '메뉴 정하는 중...',
        '도시락 포장 중...',
        '도시락 동료 찾는 중...',
      ]}
    />
  ) : (
    <>
      <section className="relative flex h-fit min-h-screen flex-col">
        <header>
          <NavBar path={groupPath}>모임</NavBar>
        </header>
        <main className="mx-[36px]">
          <section className="mt-[144px]">
            <TitleText>지금 가장 인기있어요!</TitleText>
            <ul className="mt-5 flex flex-nowrap gap-5">
              {groupItems.map((group) => (
                <GroupPopularCard key={group.id} group={group} />
              ))}
            </ul>
          </section>
          <section className="mb-32 mt-16">
            <TitleText>이런 모임 어때요?</TitleText>
            <ul className="mt-5 flex flex-col gap-4">
              {groupItems.map((group) => (
                <GroupListCard key={group.id} group={group} />
              ))}
            </ul>
          </section>
          <Outlet />
        </main>
      </section>
      <MainNavBar />
    </>
  );
};

const fetchGroups = async (groupInfo) => {
  const groups = await pb
    .collection('group')
    .getList(groupInfo.pageParam, PER_PAGE, {
      sort: '-created',
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

const queryOptions = {
  queryKey: ['group'],
  queryFn: fetchGroups,
  initialPageParam: INITIAL_PAGE,
  getNextPageParam: (lastPage, allPages) => {
    return lastPage.page < lastPage.totalPages ? allPages.length + 1 : null;
  },
};

export const loader = (queryClient) => async () => {
  let groupsData = null;
  const cachedGroupsData = queryClient.getQueryData(['group']);

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

Component.displayName = 'Group';
