const Tag = ({
  children,
  tagType,
  recruiting,
  position = '',
  customStyle,
  deleteEvent,
}) => {
  const baseClass = 'noto rounded-full px-3 text-paragraph-base';

  const defaultClass = `border border-gray500 py-[6px] text-gray600 ${children === '전체보기' ? 'bg-content-color text-white' : ''}`;

  const typeClasses = {
    delete:
      'flex max-w-fit items-center gap-1 border border-gray500 text-primary-color',
    recruit: `${recruiting ? 'bg-content-color' : 'bg-content-transparent'} py-1 text-white`,
  };

  const className =
    `${baseClass} ${typeClasses[tagType] || defaultClass} ${position} ${customStyle}`.trim();

  switch (tagType) {
    case 'delete':
      return (
        <li className={className}>
          <button type="button" aria-label="태그 선택" className="py-[6px]">
            {children}
          </button>
          <button
            onClick={deleteEvent}
            type="button"
            aria-label="삭제"
            className="h-4 w-4 bg-delete bg-cover py-[6px]"
          ></button>
        </li>
      );

    case 'recruit':
      return (
        <span className={`${className} inline-block`}>
          {recruiting ? '모집 중' : '모집 완료'}
        </span>
      );

    default:
      return (
        <li>
          <button type="button" className={className}>
            {children}
          </button>
        </li>
      );
  }
};

export default Tag;
