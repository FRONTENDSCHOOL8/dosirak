import HeartButton from '@/components/atom/common/HeartButton';
import ToggleButton from '@/components/atom/common/ToggleButton';
import { getDateHangul } from '@/util/getDate';

const CommentCard = ({ data }) => {
  return (
    <li className="noto flex justify-between">
      <figure className="flex gap-[10px]">
        <img
          className="size-[38px] rounded-full "
          src={data.expand.commenter.thumbnail}
          alt=""
        />
        <figcaption>
          <p className="flex items-end gap-2">
            <strong className="font-semibold leading-normal tracking-tight">
              {data.expand.commenter.nickname}
            </strong>
            <span className="text-paragraph-base text-gray-500">
              {getDateHangul(data.updated, false, false)}
            </span>
          </p>
          <p>{data.comment}</p>
          <p className="flex gap-3 text-[13px] text-gray-700">
            <span>좋아요 {data.like.length}개</span>
            <button>답글 달기</button>
            <button>신고</button>
          </p>
        </figcaption>
      </figure>
      <ToggleButton
        type="heart"
        alt="좋아요"
        colorType="black"
        isClicked={false}
      />
    </li>
  );
};

export default CommentCard;
