import ImgBox from '@/components/atom/common/ImgBox';
import GroupInteraction from '@/components/atom/group/GroupInteraction';
import GroupTitle from '@/components/atom/group/GroupTitle';
import Tag from '@/components/atom/group/Tag';
import GroupInfo from '@/components/molecule/group/GroupInfo';
import HashTagList from '@/components/molecule/group/HashTagList';
import { Link } from 'react-router-dom';

const GroupListCard = ({ group }) => {
  const { title, thumbnail, participant, like, hashTag, isRecruiting } = group;
  const uploadTime = 3;

  return (
    <li>
      <Link>
        <div className="relative flex h-[124px] w-full overflow-hidden rounded-2xl shadow-list">
          <ImgBox
            size="h-[124px] w-[124px]"
            className="shrink-0 rounded-r-xl"
            url={thumbnail}
            alt=""
          />
          <div className="mb-3 ml-4 mr-[22px] mt-[14px] w-full">
            <div className="flex justify-between">
              <Tag tagType="recruit" isActive={isRecruiting} />
              <GroupInteraction group={group} colorType="black" />
            </div>
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
    </li>
  );
};

export default GroupListCard;
