import { Link } from 'react-router-dom';
import Tag from '@/components/atom/group/Tag';
import ImgBox from '@/components/atom/common/ImgBox';
import HashTagList from '@/components/molecule/group/HashTagList';
import GroupTitle from '@/components/atom/group/GroupTitle';
import GroupInfo from '@/components/molecule/group/GroupInfo';
import GroupCardGradient from '@/components/atom/group/GroupCardGradient';
import GroupInteraction from '@/components/atom/group/GroupInteraction';

const GroupPopularCard = ({ group }) => {
  const { id, title, thumbnail, participant, like, hashTag, isRecruiting } =
    group;
  const uploadTime = 3;

  return (
    <li className="relative m-1 h-[280px] w-[280px]">
      <Link
        to={`/group/detail/${id}/feed`}
        className="absolute bottom-0 left-0 right-0 top-0 overflow-hidden rounded-2xl shadow-card"
      >
        <ImgBox
          size="h-[200px] w-[280px]"
          className="absolute"
          url={thumbnail}
          alt="모임 썸네일"
        />
        <div className="relative px-5 pt-[22px]">
          <Tag
            position="absolute z-10"
            tagType="recruit"
            recruiting={isRecruiting}
          />
          <HashTagList
            hashTagArr={hashTag.hashTag}
            round={true}
            position="top-[140px]"
            gap="gap-[6px]"
          />
        </div>
        <div className="absolute bottom-0 left-0 z-10 h-[80px] w-[280px] bg-white px-5 pb-5 pt-[18px]">
          <GroupTitle>{title}</GroupTitle>
          <GroupInfo
            uploadTime={uploadTime}
            peopleNum={participant.length}
            likeNum={like.length}
            position="mt-[6px]"
          />
        </div>
        <GroupCardGradient />
      </Link>
      <GroupInteraction
        group={group}
        colorType="white"
        className="absolute end-4 top-[18px] z-10 p-1"
      />
    </li>
  );
};

export default GroupPopularCard;
