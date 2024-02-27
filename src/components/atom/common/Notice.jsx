import { memo } from 'react';

const Notice = ({ type, children }) => {
  const colorStyle = {
    error: 'text-red-500',
    complete: 'text-green-600',
  };

  return (
    <span
      className={`noto absolute -bottom-5 text-paragraph-base font-bold ${colorStyle[type]}`}
    >
      {children}
    </span>
  );
};

export default memo(Notice);
