import ImgBox from '@/components/atom/common/ImgBox';
import GroupInteraction from '@/components/atom/group/GroupInteraction';
import GroupTitle from '@/components/atom/group/GroupTitle';
import Tag from '@/components/atom/group/Tag';
import GroupInfo from '@/components/molecule/group/GroupInfo';
import HashTagList from '@/components/molecule/group/HashTagList';
import { Link } from 'react-router-dom';

const GroupListCard = ({ group }) => {
  const { id, title, thumbnail, participant, like, hashTag, isRecruiting } =
    group;
  const uploadTime = 1;

  return (
    <li className="relative">
      <Link to={`/group/detail/${id}/feed`}>
        <div className="relative flex h-[124px] w-full overflow-hidden rounded-2xl shadow-list">
          <ImgBox
            size="h-[124px] w-[124px]"
            className="shrink-0 rounded-r-xl"
            url={thumbnail}
            alt="모임 썸네일"
          />
          <div className="mb-3 me-[22px] ms-4 mt-[14px] w-full">
            <Tag tagType="recruit" recruiting={isRecruiting} />
            <GroupTitle position="mt-[6px] mb-[10px]">{title}</GroupTitle>
            <HashTagList
              hashTagArr={hashTag.hashTag}
              round={false}
              gap="gap-2"
            />
            <GroupInfo
              uploadTime={uploadTime}
              peopleNum={participant.length}
              likeNum={like.length}
              position="mt-1"
            />
          </div>
        </div>
      </Link>
      <GroupInteraction
        group={group}
        colorType="black"
        className="absolute end-[22px] top-[14px] p-1"
      />
    </li>
  );
};

export default GroupListCard;
