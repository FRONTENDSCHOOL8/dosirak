import Tag from '@/components/atom/group/Tag';
import { getDate } from '@/util';

const FeedWriter = ({ feed }) => {
  return (
    <div className="flex items-center justify-between">
      <figure className="flex items-center gap-2.5">
        <img
          className="size-[45px] select-none rounded-full"
          src={feed.expand.writer.thumbnail}
          alt={`${feed.expand.writer.nickname}의 썸네일`}
        />
        <figcaption className="select-none">
          <p className="text-label">{feed.expand.writer.nickname}</p>
          <p className="text-paragraph-base text-gray-600">
            {getDate(feed.created)}
          </p>
        </figcaption>
      </figure>
      <Tag tagType="follow">팔로우</Tag>
    </div>
  );
};

export default FeedWriter;
