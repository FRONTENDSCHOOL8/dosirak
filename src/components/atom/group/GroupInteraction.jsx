import ToggleButton from '@/components/atom/common/ToggleButton';
import { useLoginUserInfo } from '@/hook';
import { pb } from '@/util';
import { useState } from 'react';

const fetchInteraction = async (groupId, data) => {
  const result = await pb.collection('groups').update(groupId, data);
  return result;
};

const GroupInteraction = ({ group, colorType, className }) => {
  const [currentLikeIt, setCurrentLikeIt] = useState(group.like);
  const userInfo = useLoginUserInfo();

  const handleLikeIt = () => {
    const nextLikeIt = currentLikeIt.includes(userInfo.id)
      ? currentLikeIt.filter((v) => v != userInfo.id)
      : [...currentLikeIt, userInfo.id];

    setCurrentLikeIt(nextLikeIt);

    const data = {
      like: nextLikeIt,
    };

    fetchInteraction(group.id, data);
  };

  return (
    <ToggleButton
      onClickButton={handleLikeIt}
      type="heart"
      alt="좋아요"
      colorType={colorType}
      isClicked={currentLikeIt.includes(userInfo.id)}
      className={className}
    />
  );
};

export default GroupInteraction;
