import FeedCard from '@/components/organism/feed/FeedCard';
import { getPbImage, pb } from '@/util';
import { getPbImageArray } from '@/util/getPbImage';
import { useQuery } from '@tanstack/react-query';
import { useLoaderData } from 'react-router-dom';

export const Component = () => {
  const feedsData = useLoaderData();

  const { data: cachedFeedsData } = useQuery({
    queryKey: ['feed'],
    queryFn: fetchFeed,
    initialData: feedsData,
    staleTime: 1000 * 5,
  });

  return (
    <section className="scrollbar-hide h-full overflow-y-scroll">
      <h2 className="sr-only">피드</h2>
      <div className="noto h-10 justify-center bg-primary-color text-center">
        헤더
      </div>
      <section className="mb-10 mt-20">
        <ul className="flex flex-col gap-8 px-9">
          {cachedFeedsData.items.map((feed) => (
            <FeedCard feed={feed} key={feed.id} />
          ))}
        </ul>
      </section>
    </section>
  );
};

const fetchFeed = async () => {
  const feeds = await pb.collection('feed').getList(1, 10, {
    expand: 'writer, comments, like, bookmark',
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

export const loader = (queryClient) => async () => {
  return await queryClient.ensureQueryData({
    queryKey: ['feed'],
    queryFn: fetchFeed,
  });
};

Component.displayName = 'feed';
