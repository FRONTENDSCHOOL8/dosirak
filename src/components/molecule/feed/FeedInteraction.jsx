import { ReactComponent as Comment } from '@/assets/common/comment.svg';
import { ReactComponent as Scrap } from '@/assets/common/scrap-uncheck.svg';
import HeartButton from '@/components/atom/common/HeartButton';
import useFeedStore from '@/store/useFeedStore';
import { Link } from 'react-router-dom';

const FeedInteraction = ({ feed }) => {
  const { setCommentView } = useFeedStore((state) => state);

  const handleOpenCommentWindow = () => {
    setCommentView(feed.id);
  };

  return (
    <section className="flex justify-between border-b-[0.8px] border-gray300 pb-4">
      <h2 className="sr-only">인터렉션 영역</h2>
      <div className="flex items-center gap-3">
        <Link to={`/feed/comment/${feed.id}`} onClick={handleOpenCommentWindow}>
          <Comment />
        </Link>
        <HeartButton />
        <span className='select-none rounded-lg bg-[url("@/assets/common/likeinfo.svg")] bg-cover bg-no-repeat py-1.5 pe-3 ps-5 text-paragraph-base'>
          {feed.like.length}명이 좋아합니다.
        </span>
      </div>
      <button>
        <Scrap />
      </button>
    </section>
  );
};

export default FeedInteraction;
