import ToggleButton from '@/components/atom/common/ToggleButton';
import { useLoginUserInfo } from '@/hook';
import { pb } from '@/util';
import { getDateHangul } from '@/util/getDate';
import { useState } from 'react';

const fetchInteraction = async (commentId, data) => {
  const result = await pb.collection('feed_comments').update(commentId, data);
  return result;
};

const CommentCard = ({ comment, refetch }) => {
  const [currentLikeIt, setCurrentLikeIt] = useState(comment.like);
  const userInfo = useLoginUserInfo();

  const handleLikeIt = () => {
    const nextLikeIt = currentLikeIt.includes(userInfo.id)
      ? currentLikeIt.filter((v) => v != userInfo.id)
      : [...currentLikeIt, userInfo.id];

    setCurrentLikeIt(nextLikeIt);

    const data = {
      like: nextLikeIt,
    };

    fetchInteraction(comment.id, data);
    // refetch();
  };

  return (
    <li className="noto flex justify-between gap-5 pe-2">
      <figure className="flex gap-[10px]">
        <img
          className="size-[38px] rounded-full "
          src={comment.expand.commenter.thumbnail}
          alt=""
        />
        <figcaption className="max-w-64">
          <p className="flex items-end gap-2">
            <strong className="font-semibold leading-normal tracking-tight">
              {comment.expand.commenter.nickname}
            </strong>
            <span className="text-paragraph-base text-gray-500">
              {getDateHangul(comment.updated, false, false)}
            </span>
          </p>
          <p>{comment.comment}</p>
          <p className="flex gap-3 text-[13px] text-gray-700">
            <span>좋아요 {currentLikeIt.length}개</span>
            <button>답글 달기</button>
            <button>신고</button>
          </p>
        </figcaption>
      </figure>
      <ToggleButton
        onClickButton={handleLikeIt}
        type="heart"
        alt="좋아요"
        colorType="black"
        isClicked={currentLikeIt.includes(userInfo.id)}
      />
    </li>
  );
};

export default CommentCard;
