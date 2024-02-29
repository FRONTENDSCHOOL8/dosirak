import HeartButton from '@/components/atom/common/HeartButton';
import ImgBox from '@/components/atom/common/ImgBox';
import GroupTitle from '@/components/atom/group/GroupTitle';
import Tag from '@/components/atom/group/Tag';
import GroupInfo from '@/components/molecule/group/GroupInfo';
import HashTagList from '@/components/molecule/group/HashTagList';
import { useId } from 'react';
import { Link } from 'react-router-dom';

const GroupListCard = () => {
  const groupData = {
    recruitStatus: '모집 완료',
    groupName: '매일매일 도시락',
    hashTagArr: ['태그1', '태그2'],
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
  } = groupData;

  return (
    <li>
      <Link>
        <div className="shadow-list relative flex h-[124px] w-full overflow-hidden rounded-2xl">
          <ImgBox
            size="h-[124px] w-[124px]"
            className="shrink-0 rounded-r-xl"
          />
          <div className="mb-3 ml-4 mr-[22px] mt-[14px] w-full">
            <div className="flex justify-between">
              <Tag tagType="recruit">{recruitStatus}</Tag>
              <HeartButton id={postId} heartColor="black" />
            </div>
            <GroupTitle position="mt-[6px] mb-[10px]">{groupName}</GroupTitle>
            <HashTagList hashTagArr={hashTagArr} round={false} gap="gap-2" />
            <GroupInfo
              uploadTime={uploadTime}
              peopleNum={peopleNum}
              likeNum={likeNum}
              position="mt-1"
            />
          </div>
        </div>
      </Link>
    </li>
  );
};

export default GroupListCard;
