import Spinner from '@/components/atom/common/Spinner';
import NoContents from '@/components/atom/common/NoContents';
import MainNavBar from '@/components/molecule/common/MainNavBar';
import NavBar from '@/components/molecule/navbar/NavBar';
import FeedCard from '@/components/organism/feed/FeedCard';
import GroupParticipate from '@/components/organism/group/GroupParticipate';
import { useInterSectionObserver, useLoginUserInfo } from '@/hook';
import { getPbImage, pb } from '@/util';
import { getPbImageArray } from '@/util/getPbImage';
import { useInfiniteQuery } from '@tanstack/react-query';
import { useLayoutEffect } from 'react';
import { useRef, useEffect } from 'react';
import {
  useParams,
  Outlet,
  useLoaderData,
  useNavigation,
  Link,
} from 'react-router-dom';

const INITIAL_PAGE = 1;
const PER_PAGE = 10;

export const Component = () => {
  const userInfo = useLoginUserInfo();
  const navigate = useNavigation();
  const loadedFeedsData = useLoaderData();
  const { groupId } = useParams();
  const queryOptions = setQueryOptions(groupId);

  const groupFeedPath = [
    { path: `/group/detail/${groupId}/feed`, children: '우리 한 끼' },
    { path: `/group/detail/${groupId}/chat`, children: '채팅' },
  ];
  useLayoutEffect(() => {
    if (!Object.keys(userInfo).length) {
      alert('로그인 후 이용 가능합니다.');
      navigate('/login');
    }
  }, []);

  const {
    data: cachedFeedsData,
    hasNextPage,
    fetchNextPage,
    refetch,
    status,
  } = useInfiniteQuery({
    ...queryOptions,
    initialData: loadedFeedsData,
    staleTime: 1000 * 5,
  });

  const feedsData = cachedFeedsData ? cachedFeedsData.pages : [];
  const feedItems = feedsData
    .map((feedsData) => feedsData.items)
    .flatMap((feedItems) => feedItems);

  const [observe, unobserve] = useInterSectionObserver(fetchNextPage);
  const observeTarget = useRef(null);

  useEffect(() => {
    if (hasNextPage) observe(observeTarget.current);
  }, [feedItems.length]);

  useEffect(() => {
    refetch();
  }, [userInfo.follow.length]);

  return status === 'loading' ? (
    <Spinner textArray={['탕수육 만드는중...', '레시피 찾는중...']} />
  ) : (
    <>
      <section className="relative flex h-fit min-h-screen flex-col">
        <h2 className="sr-only">모임</h2>
        <header>
          <NavBar type="feed" path={groupFeedPath}>
            <div className="relative -left-[6px] flex items-center gap-3">
              <Link to={-1}>
                <img src="/assets/common/prev.svg" alt="뒤로가기" />
              </Link>
              모임
            </div>
          </NavBar>
        </header>
        <section className="h-fit pt-[132px]">
          <ul className="flex flex-col gap-8 px-9 pb-[125px]">
            {feedItems.length ? (
              feedItems.map((feed) => (
                <FeedCard feed={feed} key={feed.id} refetch={refetch} />
              ))
            ) : (
              <NoContents type="groupFeed" />
            )}
            <li ref={observeTarget}>&nbsp;</li>
          </ul>
        </section>
        <Outlet />
        <GroupParticipate groupId={groupId} />
      </section>
      <MainNavBar />
    </>
  );
};

const fetchFeeds = (groupId) => async (pageInfo) => {
  const feeds = await pb
    .collection('feed')
    .getList(pageInfo.pageParam, PER_PAGE, {
      sort: `-created`,
      expand: 'writer, writer.follower, like, bookmark',
      filter: `member.id ?= "${groupId}"`,
    });

  const feedItems = feeds.items.map((feed) => {
    const imageURLArray = getPbImageArray(feed);
    const writerThumbnail = getPbImage(feed.expand.writer);
    feed.images = imageURLArray;
    feed.expand.writer.thumbnail = writerThumbnail;

    return feed;
  });

  return {
    ...feeds,
    items: feedItems,
  };
};

const setQueryOptions = (groupId) => ({
  queryKey: ['feed', groupId],
  queryFn: fetchFeeds(groupId),
  initialPageParam: INITIAL_PAGE,
  getNextPageParam: (lastPage, allPages) => {
    return lastPage.page < lastPage.totalPages ? allPages.length + 1 : null;
  },
});

export const loader =
  (queryClient) =>
  async ({ params }) => {
    const { groupId } = params;

    let feedsData = null;

    const cachedFeedsData = queryClient.getQueryData(['feed', groupId]);
    const queryOptions = setQueryOptions(groupId);

    // 캐싱된 피드 데이터가 있을 경우
    if (cachedFeedsData) {
      feedsData = cachedFeedsData;
    }
    // 캐싱된 피드 데이터가 없을 경우
    else {
      feedsData = await queryClient.fetchInfiniteQuery(queryOptions);
    }

    return feedsData;
  };

Component.displayName = 'groupFeed';
