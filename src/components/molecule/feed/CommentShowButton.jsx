import { ReactComponent as Arrow } from '@/assets/common/arrow.svg';
import useFeedStore from '@/store/useFeedStore';
import { Link, useParams } from 'react-router-dom';

const CommentShowButton = ({ feed }) => {
  const { commentView, setCommentView } = useFeedStore((state) => state);
  const { feedType, keyword } = useParams();

  const handleOpenCommentWindow = () => {
    setCommentView(feed.id);
  };

  return (
    <div className="flex pt-2">
      <Link
        to={`/feed/${feedType ? feedType : `search/${keyword}`}/comment/${feed.id}`}
        className="ms-auto flex h-4 items-center justify-center py-0.5 text-paragraph-base"
        type="button"
        onClick={handleOpenCommentWindow}
      >
        {feed.comments.length}개 댓글 모두 보기
        <Arrow />
      </Link>
    </div>
  );
};

export default CommentShowButton;
