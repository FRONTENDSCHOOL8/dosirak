import LoginUserThumbnail from '@/components/atom/common/LoginUserThumbnail';
import { debounce, pb } from '@/util';
import { useState, useRef } from 'react';

const currentUserId = JSON.parse(localStorage.getItem('pocketbase_auth'))?.model
  .id;

const fetchWriteComment = async (feed, comment) => {
  const commentData = {
    comment: comment,
    commenter: currentUserId,
    parent_feed: feed,
  };

  const commentResult = await pb
    .collection('feed_comments')
    .create(commentData);
  console.log(commentResult);

  const feedData = await pb.collection('feed').getOne(feed);
  console.log(feedData.comments);
  const newCommentsArray = [...feedData.comments, commentResult.id];
  const newCommentResult = await pb.collection('feed').update(feed, {
    ...feedData,
    comments: newCommentsArray,
  });

  return newCommentResult;
};

const CommentWrite = ({ feed }) => {
  const [commentValue, setCommentValue] = useState('');
  const commentInput = useRef(null);

  const handleCommentInput = (e) => {
    setCommentValue(e.target.value);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (commentValue.length === 0) return;
    if (!currentUserId) {
      alert('로그인 후 입력 가능합니다.');
      return;
    }
    fetchWriteComment(feed, commentValue).then(() => {
      setCommentValue('');
      commentInput.current.value = '';
    });
  };

  return (
    <section>
      <h2 className="sr-only">댓글 입력</h2>
      <form
        onSubmit={handleCommentSubmit}
        className="mt-2 flex h-12 items-center gap-3 rounded-[15px] bg-white py-2 pe-4 ps-3 shadow-[0_1px_4px_2px_rgba(171,171,171,0.25)]"
      >
        <label className="size-9" htmlFor={`_${feed}_comment_input`}>
          <LoginUserThumbnail thumbnailCaption="댓글 입력 창 작성자 썸네일" />
        </label>
        <input
          ref={commentInput}
          className="w-60 text-paragraph-lg focus:outline-none"
          type="text"
          onChange={debounce(handleCommentInput, 50)}
          defaultValue={commentValue}
          placeholder="댓글을 입력하세요"
        />
        <button
          type="submit"
          className={`ms-auto text-nowrap ${commentValue.length > 0 ? 'text-primary-color' : 'text-gray300'}`}
          disabled={commentValue.length === 0}
        >
          <span className="noto w-8 text-paragraph-lg">등록</span>
        </button>
      </form>
    </section>
  );
};

export default CommentWrite;
