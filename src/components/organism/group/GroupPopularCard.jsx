import { Link } from 'react-router-dom';
import { useId } from 'react';
import Tag from '@/components/atom/group/Tag';
import ImgBox from '@/components/atom/common/ImgBox';
import HashTagList from '@/components/molecule/group/HashTagList';
import GroupTitle from '@/components/atom/group/GroupTitle';
import HeartButton from '@/components/atom/common/HeartButton';
import GroupInfo from '../../molecule/group/GroupInfo';
import GroupCardGradient from '@/components/atom/group/GroupCardGradient';

const GroupPopularCard = () => {
  const postData = {
    recruitStatus: '모집 중',
    groupName: '매일매일 도시락',
    hashTagArr: ['밀프렙', '소통해요'],
    uploadTime: 3,
    peopleNum: 118,
    likeNum: 42,
    postId: useId(),
  };

  const {
    recruitStatus,
    groupName,
    hashTagArr,
    uploadTime,
    peopleNum,
    likeNum,
    postId,
  } = postData;

  return (
    <li className="relative h-[280px] w-[280px] shrink-0 overflow-hidden rounded-2xl shadow-card">
      <Link>
        <ImgBox className="absolute" />
        <div className="relative px-5 pt-[22px]">
          <Tag position="absolute z-10" tagType="recruit">
            {recruitStatus}
          </Tag>
          <HeartButton
            id={postId}
            heartColor="white"
            className="absolute right-5 z-10"
          />
          <HashTagList
            hashTagArr={hashTagArr}
            round={true}
            position="top-[140px]"
            gap="gap-[6px]"
          />
        </div>
        <div className="absolute bottom-0 left-0 z-10 h-[80px] w-[280px] bg-white px-5 pb-5 pt-[18px]">
          <GroupTitle>{groupName}</GroupTitle>
          <GroupInfo
            uploadTime={uploadTime}
            peopleNum={peopleNum}
            likeNum={likeNum}
            position="mt-[6px]"
          />
        </div>
        <GroupCardGradient />
      </Link>
    </li>
  );
};

export default GroupPopularCard;
