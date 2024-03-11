import { Link } from 'react-router-dom';
import Tag from '@/components/atom/group/Tag';
import ImgBox from '@/components/atom/common/ImgBox';
import HashTagList from '@/components/molecule/group/HashTagList';
import GroupTitle from '@/components/atom/group/GroupTitle';
import GroupInfo from '@/components/molecule/group/GroupInfo';
import GroupCardGradient from '@/components/atom/group/GroupCardGradient';
import GroupInteraction from '@/components/atom/group/GroupInteraction';

const GroupPopularCard = ({ group }) => {
  const { title, thumbnail, participant, like, hashTag, isRecruiting } = group;
  const uploadTime = 3;

  return (
    <li className="relative h-[280px] w-[280px] shrink-0 overflow-hidden rounded-2xl shadow-card">
      <Link>
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
            recruiting={isRecruiting.toString()}
          />
          <GroupInteraction
            group={group}
            colorType="white"
            className="absolute right-5 z-10"
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
    </li>
  );
};

export default GroupPopularCard;
