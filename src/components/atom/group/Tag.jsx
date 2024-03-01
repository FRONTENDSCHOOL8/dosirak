const Tag = ({ children, tagType, position = '' }) => {
  const commonClass = 'rounded-2xl px-3 text-paragraph-base';
  let className = '';

  if (!tagType) {
    if (children === '전체보기') {
      className = 'bg-content-color py-[6px] text-white ';
    } else {
      className = 'border border-gray500 py-[6px] text-gray600';
    }

    return (
      <li>
        <button
          type="button"
          className={`${commonClass} ${className} ${position}`.trim()}
        >
          {children}
        </button>
      </li>
    );
  }

  if (tagType === 'delete') {
    className =
      'flex max-w-fit items-center gap-1 border border-gray500 py-[6px] text-primary-color';

    return (
      <li className={`${commonClass} ${className} ${position}`.trim()}>
        {children}
        <button
          type="button"
          aria-label="삭제"
          className="bg-delete h-4 w-4 bg-cover"
        >
          {/* <img src="/src/assets/common/delete.svg" alt="" /> */}
        </button>
      </li>
    );
  }

  if (tagType === 'recruit') {
    if (children === '모집 중') {
      className = 'bg-content-color py-1 text-white';
    } else {
      className = 'bg-content-transparent py-1 text-white';
    }

    return (
      <span className={`${commonClass} ${className} ${position}`.trim()}>
        {children}
      </span>
    );
  }

  if (tagType === 'follow') {
    let custom = {
      className: '',
      icon: '',
      alt: '',
    };

    if (children === '팔로잉') {
      custom = {
        className: 'bg-gray600 py-[6px] text-white',
        icon: 'check',
        alt: '체크',
        label: '해제',
      };
    } else {
      custom = {
        className: 'bg-primary-color py-[6px] text-white',
        icon: 'plus',
        alt: '추가',
        label: '추가',
      };
    }

    const { className, icon, alt, label } = custom;

    return (
      <button
        type="button"
        aria-label={`팔로우 ${label}`}
        className={`${commonClass} ${className} ${position}`.trim()}
      >
        <figure className="flex max-w-fit items-center gap-1">
          <img
            src={`/src/assets/common/${icon}-white.svg`}
            alt={`팔로우 ${alt}`}
            className="h-3 w-3"
          />
          <figcaption>{children}</figcaption>
        </figure>
      </button>
    );
  }
};

export default Tag;
