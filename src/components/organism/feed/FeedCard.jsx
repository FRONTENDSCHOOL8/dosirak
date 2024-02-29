import SwiperCard from '@/components/atom/common/SwiperCard';
import FeedWriter from '@/components/molecule/feed/FeedWriter';

import FeedInteraction from '@/components/molecule/feed/FeedInteraction';
import FeedSubject from '@/components/atom/feed/FeedSubject';
import FeedText from '@/components/molecule/feed/FeedText';

const FeedCard = ({ feed }) => {
  console.log(feed);
  return (
    <li className="noto flex flex-col gap-3">
      <FeedWriter feed={feed} />
      <SwiperCard
        slideStyle="h-[200px]"
        imgStyle="rounded-2xl"
        imageArray={feed.images}
      />
      <FeedInteraction feed={feed} />
      <FeedSubject feed={feed} />
      <FeedText feed={feed} />
    </li>
  );
};

export default FeedCard;
