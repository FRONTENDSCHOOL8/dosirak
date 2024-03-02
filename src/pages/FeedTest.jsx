import FeedCard from '@/components/organism/feed/FeedCard';
import FeedComment from '@/components/organism/feed/FeedComment';
import useFeedStore from '@/store/useFeedStore';
import { getPbImage, pb } from '@/util';
import { getPbImageArray } from '@/util/getPbImage';
import { useInfiniteQuery } from '@tanstack/react-query';
import { useLoaderData } from 'react-router-dom';

const INITIAL_PAGE = 1;
const PER_PAGE = 2;

export const Component = () => {
  const loadedFeedsData = useLoaderData();
  const { commentView } = useFeedStore();

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
    <section className="scrollbar-hide h-full overflow-y-scroll">
      <h2 className="sr-only">피드</h2>
      <div className="noto h-10 justify-center bg-primary-color text-center">
        헤더
      </div>
      <section className="mb-10 mt-20">
        <ul className="flex flex-col gap-8 px-9">
          {feedItems.map((feed) => (
            <FeedCard feed={feed} key={feed.id} />
          ))}
        </ul>
      </section>
      <FeedComment />
    </section>
  );
};

const fetchFeeds = async (pageInfo) => {
  const feeds = await pb
    .collection('feed')
    .getList(pageInfo.pageParam, PER_PAGE, {
      sort: '-created',
      expand: 'writer, comments, comments.like, like, bookmark',
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
