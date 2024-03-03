import CommentCard from './CommentCard';

const Comments = ({ comments }) => {
  return (
    <ul className="scrollbar-hide mt-6 flex max-h-[405px] flex-grow flex-col gap-8 overflow-y-scroll">
      {comments.map((comment) => (
        <CommentCard key={comment.id} data={comment} />
      ))}
    </ul>
  );
};

export default Comments;
