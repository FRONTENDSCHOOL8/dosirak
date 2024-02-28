import { useState } from 'react';

const HeartButton = ({ initialType, className }) => {
  const [type, setType] = useState(initialType);

  const toggleHeart = () => {
    setType((currentType) => (currentType === 'true' ? initialType : 'true'));
  };
  return (
    <button type="button" className={className} onClick={toggleHeart}>
      <img src={`../src/assets/common/heart-${type}.svg`} alt="좋아요" />
    </button>
  );
};

export default HeartButton;
