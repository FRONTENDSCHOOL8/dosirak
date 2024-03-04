import MainNavBar from '@/components/molecule/common/MainNavBar';
import NavBar from '@/components/molecule/navbar/NavBar';
import FeedCard from '@/components/organism/feed/FeedCard';
import { getPbImage, pb } from '@/util';
import { getPbImageArray } from '@/util/getPbImage';
import { useInfiniteQuery } from '@tanstack/react-query';
import { Outlet } from 'react-router-dom';
import { useLoaderData } from 'react-router-dom';

const INITIAL_PAGE = 1;
const PER_PAGE = 10;

const feedPath = [
  { path: '/feed/popular', children: '인기' },
  { path: '/feed/recommend', children: '추천' },
  { path: '/feed/following', children: '팔로잉' },
  { path: '/feed/myfeed', children: '내 피드' },
];

export const Component = () => {
  const loadedFeedsData = useLoaderData();

  const {
    data: cachedFeedsData,
    hasNextPage,
    fetchNextPage,
  } = useInfiniteQuery({
    ...queryOptions,
    initialData: loadedFeedsData,
    // staleTime: 1000 * 5,
  });

  const feedsData = cachedFeedsData ? cachedFeedsData.pages : [];

  const feedItems = feedsData
    .map((feedsData) => feedsData.items)
    .flatMap((feedItems) => feedItems);

  return (
    <>
      <section className="relative flex h-fit min-h-screen flex-col">
        <h2 className="sr-only">피드</h2>
        <header>
          <NavBar path={feedPath}>피드</NavBar>
        </header>
        <section className="h-fit pt-[132px]">
          <ul className="flex flex-col gap-8 px-9 pb-[125px]">
            {feedItems.map((feed) => (
              <FeedCard feed={feed} key={feed.id} />
            ))}
          </ul>
        </section>
        <Outlet />
      </section>
      <MainNavBar />
    </>
  );
};

const fetchFeeds = async (pageInfo) => {
  const feeds = await pb
    .collection('feed')
    .getList(pageInfo.pageParam, PER_PAGE, {
      sort: '-created',
      expand: 'writer, like, bookmark',
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

const queryOptions = {
  queryKey: ['feed'],
  queryFn: fetchFeeds,
  initialPageParam: INITIAL_PAGE,
  getNextPageParam: (lastPage, allPages) => {
    return lastPage.page < lastPage.totalPages ? allPages.length + 1 : null;
  },
};

export const loader = (queryClient) => async () => {
  let feedsData = null;
  const cachedFeedsData = queryClient.getQueryData(['feed']);

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

Component.displayName = 'feed';
