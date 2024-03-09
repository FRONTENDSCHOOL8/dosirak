import { useLayoutEffect, useEffect, useRef } from 'react';
import { useInterSectionObserver } from '@/hook';
import CommentCard from './CommentCard';

const Comments = ({
  comments,
  fetchNextPage,
  hasNextPage,
  isRefetching,
  refetch,
}) => {
  const [observe, unobserve] = useInterSectionObserver(fetchNextPage);
  const observeTarget = useRef(null);

  useLayoutEffect(() => {
    if (comments.length <= 10) return;
    if (isRefetching) {
      setTimeout(() => {
        observeTarget.current.scrollIntoView({ behavior: 'smooth' });
      }, 200);
    }
  }, [isRefetching]);

  useEffect(() => {
    if (hasNextPage) observe(observeTarget.current);
    else unobserve(observeTarget.current);
  }, [comments.length, isRefetching]);

  return (
    <ul className="theme-scroll relative mt-6 flex max-h-[405px] flex-grow flex-col gap-6 overflow-y-scroll overscroll-contain">
      {comments.map((comment) => (
        <CommentCard key={comment.id} comment={comment} refetch={refetch} />
      ))}
      <li ref={observeTarget}>&nbsp;</li>
    </ul>
  );
};

export default Comments;
