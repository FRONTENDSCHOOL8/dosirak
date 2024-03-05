import { useInterSectionObserver } from '@/hook';
import CommentCard from './CommentCard';
import { useEffect, useRef } from 'react';

const Comments = ({ comments, fetchNextPage, hasNextPage }) => {
  const [observe, unobserve] = useInterSectionObserver(fetchNextPage);
  const observeTarget = useRef(null);

  useEffect(() => {
    if (hasNextPage) observe(observeTarget.current);
    else unobserve(observeTarget.current);
  }, [comments.length]);

  return (
    <ul className="relative mt-6 flex max-h-[405px] flex-grow flex-col gap-8 overflow-y-scroll scrollbar-hide">
      {comments.map((comment) => (
        <CommentCard key={comment.id} data={comment} />
      ))}
      <li ref={observeTarget}></li>
    </ul>
  );
};

export default Comments;
