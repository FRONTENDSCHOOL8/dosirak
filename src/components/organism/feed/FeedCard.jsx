import SwiperCard from '@/components/atom/common/SwiperCard';
import FeedWriter from '@/components/molecule/feed/FeedWriter';

import FeedInteraction from '@/components/molecule/feed/FeedInteraction';
import FeedSubject from '@/components/atom/feed/FeedSubject';
import FeedText from '@/components/molecule/feed/FeedText';
import useFeedStore from '@/store/useFeedStore';
import CommentWrite from '@/components/molecule/feed/CommentWrite';
import CommentShowButton from '@/components/molecule/feed/CommentShowButton';

const FeedCard = ({ feed, refetch }) => {
  const { expandFeed, setExpandFeed } = useFeedStore((state) => state);
  const handleFeedExpand = () => setExpandFeed(feed.id);

  const handleMainTextClick = () => {
    if (expandFeed !== feed.id) setExpandFeed(feed.id);
  };

  return (
    <li className="feed-text noto pointer flex flex-col gap-3 bg-white px-9 py-4">
      <FeedWriter feed={feed} refetch={refetch} />
      <SwiperCard
        onClick={handleFeedExpand}
        slideStyle="h-[200px] select-none cursor-pointer"
        imgStyle="rounded-2xl"
        componentArray={feed.images}
      />
      <FeedInteraction feed={feed} />
      <div
        onClick={handleMainTextClick}
        className={`flex flex-col gap-3 ${expandFeed === feed.id ? '' : 'cursor-pointer'}`}
      >
        <FeedSubject feed={feed} />
        <FeedText feed={feed} />
      </div>
      <div>
        <CommentWrite feed={feed.id} />
        <CommentShowButton feed={feed} />
      </div>
      <div className="mt-3 h-2 w-full rounded-xl bg-gray-200"></div>
    </li>
  );
};

export default FeedCard;
