import ImgBox from '@/components/atom/common/ImgBox';
import GroupInteraction from '@/components/atom/group/GroupInteraction';
import GroupTitle from '@/components/atom/group/GroupTitle';
import Tag from '@/components/atom/group/Tag';
import GroupInfo from '@/components/molecule/group/GroupInfo';

const MyGroupCard = ({ group }) => {
  const { title, thumbnail, participant, like, isRecruiting } = group;
  const uploadTime = 3;

  return (
    <li className="relative w-fit">
      <ImgBox
        size="h-[127px] w-[169px]"
        className="rounded-[5px]"
        url={thumbnail}
        alt="모임 썸네일"
      />
      <Tag
        position="absolute top-2.5 left-3 z-10"
        tagType="recruit"
        recruiting={isRecruiting.toString()}
      />
      <GroupInteraction
        group={group}
        colorType="white"
        className="absolute right-3 top-2.5 z-10"
      />
      <GroupTitle position="mt-[6px] mb-1">{title}</GroupTitle>
      <GroupInfo
        uploadTime={uploadTime}
        peopleNum={participant.length}
        likeNum={like.length}
      />
    </li>
  );
};

export default MyGroupCard;
