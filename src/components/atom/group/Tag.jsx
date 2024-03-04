const Tag = ({ children, tagType, position = '' }) => {
  const baseClass = 'rounded-2xl px-3 text-paragraph-base';

  const defaultClass = `border border-gray500 py-[6px] text-gray600 ${children === '전체보기' ? 'bg-content-color text-white' : ''}`;

  const typeClasses = {
    delete:
      'flex max-w-fit items-center gap-1 border border-gray500 text-primary-color',
    recruit: `${children === '모집 중' ? 'bg-content-color' : 'bg-content-transparent'} py-1 text-white`,
    follow: `${children === '팔로잉' ? 'bg-gray600' : 'bg-primary-color'} py-[6px] text-white`,
  };

  const className =
    `${baseClass} ${typeClasses[tagType] || defaultClass} ${position}`.trim();

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
            className="bg-delete h-4 w-4 bg-cover py-[6px]"
          ></button>
        </li>
      );

    case 'recruit':
      return <span className={className}>{children}</span>;

    case 'follow': {
      const isFollowing = children === '팔로잉';
      const icon = isFollowing ? 'check' : 'plus';
      const alt = isFollowing ? '체크' : '추가';
      const label = isFollowing ? '해제' : '추가';

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
            <figcaption>{children}</figcaption>
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
