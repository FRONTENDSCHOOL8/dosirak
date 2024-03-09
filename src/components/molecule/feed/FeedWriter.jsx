import ToggleButton from '@/components/atom/common/ToggleButton';
import { useLoginUserInfo } from '@/hook';
import useCommonStore from '@/store/useCommonStore';
import { getDate, pb } from '@/util';
import { useState } from 'react';

const fetchInteraction = async (userId, data) => {
  const result = await pb.collection('users').update(userId, data);
  return result;
};

const FeedWriter = ({ feed, refetch }) => {
  const [currentFollower, setCurrentFollower] = useState(
    feed.expand.writer.follower
  );

  const userInfo = useLoginUserInfo();
  const writerId = feed.expand.writer.id;

  const handleFollow = () => {
    const nextFollower = currentFollower.includes(userInfo.id)
      ? currentFollower.filter((v) => v != userInfo.id)
      : [...currentFollower, userInfo.id];

    setCurrentFollower(nextFollower);

    const followerData = {
      follower: nextFollower,
    };

    fetchInteraction(writerId, followerData);
    refetch();
  };

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
      <ToggleButton
        onClickButton={handleFollow}
        type="follow"
        alt={userInfo.follow.includes(writerId) ? '팔로잉' : '팔로우'}
        isClicked={userInfo.follow.includes(writerId)}
      >
        {userInfo.follow.includes(writerId) ? '팔로잉' : '팔로우'}
      </ToggleButton>
    </div>
  );
};

export default FeedWriter;
