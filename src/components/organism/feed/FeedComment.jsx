import CommentWindowHeader from '@/components/molecule/feed/CommentWindowHeader';
import useFeedStore from '@/store/useFeedStore';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const Component = () => {
  const { setCommentView } = useFeedStore((state) => state);
  const [commentBoxStyle, setCommentBoxStyle] = useState({
    height: '0px',
    overflow: 'hidden',
  });
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(
      setCommentBoxStyle({
        maxHeight: '60vh',
        height: '569px',
        transition: 'height ease-in-out .3s',
      }),
      200
    );

    return () => clearTimeout(timer);
  }, []);

  const handleCommentClose = (e) => {
    if (e.target.closest('.comment-window')) return;

    navigate('/feed', { replace: true });
    setCommentView('');
  };

  return (
    <section
      onClick={handleCommentClose}
      className="absolute top-0 z-30 flex size-full max-w-[430px] flex-shrink-0 items-end bg-[rgba(0,0,0,0.45)] px-3"
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

Component.displayName = 'FeedComment';
