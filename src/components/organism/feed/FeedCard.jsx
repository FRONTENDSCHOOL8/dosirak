import SwiperCard from '@/components/atom/common/SwiperCard';
import FeedWriter from '@/components/molecule/feed/FeedWriter';

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
    </li>
  );
};

export default FeedCard;
