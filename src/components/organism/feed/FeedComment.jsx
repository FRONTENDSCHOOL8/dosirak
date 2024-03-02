import useFeedStore from '@/store/useFeedStore';

const FeedComment = () => {
  const { commentView, setCommentView } = useFeedStore((state) => state);

  const commentBoxStyle = {
    height: '569px',
  };

  const handleCommentClose = () => {
    setCommentView('');
  };
  return (
    <section
      onClick={handleCommentClose}
      className="absolute top-0 z-30 flex size-full max-w-[430px] flex-shrink-0 items-end bg-[rgba(0,0,0,0.45)] px-3"
    >
      <h2 className="sr-only">피드 댓글</h2>
      <div style={commentBoxStyle} className="w-full bg-white">
        댓글
      </div>
    </section>
  );
};

export default FeedComment;
