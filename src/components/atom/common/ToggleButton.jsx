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
    true: 'follow-true.svg',
    false: 'follow-false.svg',
  },
  eye: {
    true: 'eye-true.svg',
    false: 'eye-false.svg',
  },
};

const buttonTheme = {
  heart: {
    true: '',
    false: '',
  },
  bookmark: {
    true: '',
    false: '',
  },
  follow: {
    true: 'flex items-center justify-center gap-1 rounded-3xl bg-gray-500 px-3 py-1',
    false:
      'flex items-center justify-center gap-1 rounded-3xl bg-primary-color px-3 py-1',
  },
  eye: {
    true: 'absolute bottom-1 right-0',
    false: 'absolute bottom-1 right-0',
  },
};

const ToggleButton = ({
  type,
  alt,
  colorType,
  isClicked,
  onClickButton,
  children,
  ...restProps
}) => {
  const [currentClick, setCurrentClick] = useState(isClicked);
  const buttonImgSrc = `/assets/common/${colorType ? colorType : ''}${buttonName[type][currentClick]}`;
  const buttonStyle = buttonTheme[type][currentClick];

  const handleClick = () => {
    onClickButton?.();
    setCurrentClick(!currentClick);
  };

  return (
    <button
      type="button"
      aria-label={alt}
      className={buttonStyle}
      onClick={handleClick}
      {...restProps}
    >
      <img src={buttonImgSrc} alt={alt} />
      {children && (
        <span className="noto text-paragraph-lg text-white">{children}</span>
      )}
    </button>
  );
};

export default ToggleButton;
