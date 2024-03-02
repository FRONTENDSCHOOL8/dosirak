import CommentWindowHeader from '@/components/molecule/feed/CommentWindowHeader';
import useFeedStore from '@/store/useFeedStore';

const FeedComment = () => {
  const { commentView, setCommentView } = useFeedStore((state) => state);
  const commentSectionStyleClass =
    'absolute top-0 z-30 flex size-full max-w-[430px] flex-shrink-0 items-end bg-[rgba(0,0,0,0.45)] px-3';

  console.log(commentView);

  const commentBoxStyle = commentView
    ? {
        maxHeight: '60vh',
        height: '569px',
        transition: 'height ease-in-out .3s',
      }
    : {
        height: '0px',
        overflow: 'hidden',
      };

  const handleCommentClose = (e) => {
    if (e.target.closest('.comment-window')) return;

    setCommentView('');
  };

  return (
    <section
      onClick={handleCommentClose}
      className={commentView && commentSectionStyleClass}
    >
      <h2 className="sr-only">피드 댓글</h2>
      <div
        style={commentBoxStyle}
        className="comment-window w-full rounded-se-[3rem] rounded-ss-[3rem] bg-white px-6"
      >
        <CommentWindowHeader />
      </div>
    </section>
  );
};

export default FeedComment;
