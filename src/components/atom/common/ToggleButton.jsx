import { useState } from 'react';

const buttonName = {
  heart: {
    true: 'heart-true.svg',
    false: 'heart-false.svg',
  },
  bookmark: {
    true: 'bookmark-true.svg',
    false: 'bookmark-false.svg',
  },
  follow: {
    true: {},
    false: {},
  },
};

const ToggleButton = ({ type, alt, colorType, isClicked, onClickButton }) => {
  const [currentClick, setCurrentClick] = useState(isClicked);
  const buttonImgSrc = `/assets/common/${colorType ? colorType : ''}${buttonName[type][currentClick]}`;

  const handleClick = () => {
    onClickButton?.();
    setCurrentClick(!currentClick);
  };

  return (
    <button type="button" aria-label={alt} onClick={handleClick}>
      <img src={buttonImgSrc} alt={alt} />
    </button>
  );
};

export default ToggleButton;
