const Tag = ({ children, tagType, isActive, position = '' }) => {
  const baseClass = 'rounded-2xl px-3 text-paragraph-base';

  const defaultClass = `border border-gray500 py-[6px] text-gray600 ${children === '전체보기' ? 'bg-content-color text-white' : ''}`;

  const typeClasses = {
    delete:
      'flex max-w-fit items-center gap-1 border border-gray500 text-primary-color',
    recruit: `${isActive ? 'bg-content-color' : 'bg-content-transparent'} py-1 text-white`,
    follow: `${isActive ? 'bg-gray600' : 'bg-primary-color'} py-[6px] text-white`,
  };

  const typeContent = {
    recruit: `${isActive ? '모집 중' : '모집 완료'}`,
    follow: isActive
      ? { text: '팔로잉', icon: 'check', alt: '체크', label: '해제' }
      : { text: '팔로우', icon: 'plus', alt: '추가', label: '추가' },
  };

  const className =
    `${baseClass} ${typeClasses[tagType] || defaultClass} ${position}`.trim();

  const content = typeContent[tagType];

  switch (tagType) {
    case 'delete':
      return (
        <li className={className}>
          <button type="button" aria-label="태그 선택" className="py-[6px]">
            {children}
          </button>
          <button
            type="button"
            aria-label="삭제"
            className="h-4 w-4 bg-delete bg-cover py-[6px]"
          ></button>
        </li>
      );

    case 'recruit':
      return (
        <span className={className} isActive={isActive}>
          {content}
        </span>
      );

    case 'follow': {
      const { text, icon, alt, label } = content;

      return (
        <button
          type="button"
          aria-label={`팔로우 ${label}`}
          className={className}
        >
          <figure className="flex max-w-fit items-center gap-1">
            <img
              src={`/src/assets/common/${icon}-white.svg`}
              alt={`팔로우 ${alt} 아이콘`}
              className="h-3 w-3"
            />
            <figcaption>{text}</figcaption>
          </figure>
        </button>
      );
    }

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
