import ToggleButton from '@/components/atom/common/ToggleButton';
import { useLoginUserInfo } from '@/hook';
import { getDate, pb } from '@/util';
import { useState } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import useUserSessionStore from '@/store/useUserSessionStore';
import useUserPersistStore from '@/store/useUserPersistStore';

const fetchFollower = async (userId, data) => {
  const result = await pb.collection('users').update(userId, data);
  return result;
};

const FeedWriter = ({ feed, refetch }) => {
  const { loginUser: sessionUser, setLoginUser: setSessionUser } =
    useUserSessionStore((state) => state);
  const { loginUser: rememberUser, setLoginUser: setRememberUser } =
    useUserPersistStore((state) => state);

  const userInfo = useLoginUserInfo();
  const writerId = feed.expand.writer.id;

  const [currentFollower, setCurrentFollower] = useState(
    feed.expand.writer.follower
  );

  const isFollow =
    userInfo.storage === 'session'
      ? sessionUser.follow.includes(writerId)
      : rememberUser.follow.includes(writerId);

  const queryClient = useQueryClient();

  const handleFollow = async () => {
    const nextFollower = currentFollower.includes(userInfo.id)
      ? currentFollower.filter((v) => v != userInfo.id)
      : [...currentFollower, userInfo.id];

    const followerData = {
      follower: nextFollower,
    };
    await fetchFollower(writerId, followerData);

    const nextFollow = userInfo.follow.includes(writerId)
      ? userInfo.follow.filter((v) => v != writerId)
      : [...userInfo.follow, writerId];

    const followData = {
      follow: nextFollow,
    };

    await fetchFollower(userInfo.id, followData);

    setCurrentFollower(nextFollower);
    if (userInfo.storage === 'session') {
      setSessionUser({
        ...sessionUser,
        follow: nextFollow,
      });
    } else {
      setRememberUser({
        ...rememberUser,
        follow: nextFollow,
      });
    }

    queryClient.invalidateQueries({
      queryKey: ['feed', 'following'],
    });
    queryClient.invalidateQueries({
      queryKey: ['feed', 'popular'],
    });
    queryClient.invalidateQueries({
      queryKey: ['feed', 'recommend'],
    });
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
        alt={isFollow ? '팔로잉' : '팔로우'}
        isClicked={isFollow}
      >
        {isFollow ? '팔로잉' : '팔로우'}
      </ToggleButton>
    </div>
  );
};

export default FeedWriter;
