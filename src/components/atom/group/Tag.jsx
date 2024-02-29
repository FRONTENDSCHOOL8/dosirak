const Tag = ({ children, tagType, position }) => {
  let className = '';
  if (tagType === 'recruit' && children === '모집 중') {
    className = 'bg-content-color text-paragraph-base text-white';
  }
  if (tagType === 'recruit' && children === '모집 완료') {
    className = 'bg-content-transparent text-paragraph-base text-white';
  }
  return (
    <span className={`${className} ${position} rounded-2xl px-3 py-1`}>
      {children}
    </span>
  );
};

export default Tag;
