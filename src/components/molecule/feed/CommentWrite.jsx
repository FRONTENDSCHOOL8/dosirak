import LoginUserThumbnail from '@/components/atom/common/LoginUserThumbnail';
import { debounce } from '@/util';
import { useState } from 'react';

const CommentWrite = ({ feed }) => {
  const { commentValue, setCommentValue } = useState('');
  console.log(feed);

  const handleCommentInput = (e) => {
    setCommentValue(e.target.value);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section>
      <h2 className="sr-only">댓글 입력</h2>
      <form
        onSubmit={handleCommentSubmit}
        className="mt-2 flex h-12 items-center gap-3 rounded-[15px] bg-white py-2 pe-4 ps-3 shadow-[0_1px_4px_2px_rgba(171,171,171,0.25)]"
      >
        <label className="size-9" htmlFor={`_${feed.id}_comment_input`}>
          <LoginUserThumbnail thumbnailCaption="댓글 입력 창 작성자 썸네일" />
        </label>
        <input
          className="w-60 text-paragraph-lg focus:outline-none"
          type="text"
          onChange={debounce(handleCommentInput, 200)}
          defaultValue={commentValue}
          placeholder="댓글을 입력하세요"
        />
        <button type="submit" className="ms-auto">
          등록
        </button>
      </form>
      <button type="button">{feed.comments.length}개 댓글 모두 보기</button>
    </section>
  );
};

export default CommentWrite;
