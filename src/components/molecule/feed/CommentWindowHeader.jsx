import { ReactComponent as Indicator } from '@/assets/common/comment-indicator.svg';
import { ReactComponent as Close } from '@/assets/common/close.svg';
import useFeedStore from '@/store/useFeedStore';
import { useNavigate } from 'react-router-dom';

const CommentWindowHeader = () => {
  const setCommentView = useFeedStore((state) => state.setCommentView);
  const navigate = useNavigate();

  const handleCloseCommentWindow = () => {
    setCommentView('');
    navigate(-1);
  };

  return (
    <div
      role="section"
      className="relative flex h-20 w-full flex-col items-center py-3"
    >
      <Indicator />
      <h3 className="noto mt-4 select-none text-label">댓글</h3>
      <button
        onClick={handleCloseCommentWindow}
        className="absolute right-0 top-8"
      >
        <Close />
      </button>
    </div>
  );
};

export default CommentWindowHeader;
