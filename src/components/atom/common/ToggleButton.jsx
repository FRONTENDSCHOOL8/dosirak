import { useState } from 'react';

const ToggleButton = ({ type, alt, colorType, isClicked }) => {
  const [currentClick, setCurrentClick] = useState(isClicked);

  const handleClick = () => {
    setCurrentClick(!currentClick);
  };

  return (
    <button type="button" aria-label={alt} onClick={handleClick}>
      <img src={`/src/assets/common/${type}-${currentClick}${type === 'heart' && currentClick === false ? `-${colorType}` : ``}.svg`} alt={alt} />
    </button>
  );
};

export default ToggleButton;
