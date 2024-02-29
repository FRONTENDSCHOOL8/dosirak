import { getDate, getPbImage, pb } from '@/util';
import { getPbImageArray } from '@/util/getPbImage';
import { useQuery } from '@tanstack/react-query';
import { useLoaderData } from 'react-router-dom';

export const Component = () => {
  const feedsData = useLoaderData();

  const { data: cachedFeedsData } = useQuery({
    queryKey: ['feed'],
    queryFn: fetchFeed,
    initialData: feedsData,
    staleTime: 1000 * 20,
  });

  console.log(cachedFeedsData);

  return (
    <section>
      <h2 className="sr-only">피드</h2>
      <div className="noto h-10 justify-center bg-primary-color text-center">
        헤더
      </div>
      <section className="mt-20">
        <ul className="px-9">
          {cachedFeedsData.items.map((feed) => (
            <li key={feed.id} className="noto">
              <div className="flex items-center justify-between">
                <figure className="flex items-center gap-2.5">
                  <img
                    className="size-[45px] rounded-full"
                    src={feed.expand.writer.thumbnail}
                    alt=""
                  />
                  <figcaption>
                    <p className="text-label">{feed.expand.writer.nickname}</p>
                    <p className="text-paragraph-base text-gray-600">
                      {getDate(feed.created)}
                    </p>
                  </figcaption>
                </figure>
                <div>팔로우버튼</div>
              </div>
            </li>
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
