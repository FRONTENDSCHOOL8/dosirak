import ToggleButton from '@/components/atom/common/ToggleButton';
import { getDate, pb } from '@/util';
import { useState } from 'react';

const currentUserId = JSON.parse(localStorage.getItem('pocketbase_auth'))?.model
  .id;

const fetchInteraction = async (userId, data) => {
  console.log(userId, data);
  const result = await pb.collection('users').update(userId, data);
  return result;
};

const FeedWriter = ({ feed, refetch }) => {
  const [currentFollower, setCurrentFollower] = useState(
    feed.expand.writer.follower
  );

  const handleFollow = () => {
    const nextFollower = currentFollower.includes(currentUserId)
      ? currentFollower.filter((v) => v != currentUserId)
      : [...currentFollower, currentUserId];

    console.log(nextFollower);

    setCurrentFollower(nextFollower);

    const data = {
      follower: nextFollower,
    };

    fetchInteraction(feed.expand.writer.id, data);
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
        alt={currentFollower.includes(currentUserId) ? '팔로잉' : '팔로우'}
        isClicked={currentFollower.includes(currentUserId)}
      >
        {currentFollower.includes(currentUserId) ? '팔로잉' : '팔로우'}
      </ToggleButton>
    </div>
  );
};

export default FeedWriter;
