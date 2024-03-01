const getTagType = (tagType, children) => {
  switch (tagType) {
    case 'delete':
      return {
        component: 'li',
        className:
          'flex max-w-fit items-center gap-1 border border-gray500 py-[6px] text-primary-color',
        extraContent: (
          <button
            type="button"
            aria-label="삭제"
            className="bg-delete h-4 w-4 bg-cover"
          ></button>
        ),
      };

    case 'recruit':
      return {
        component: 'span',
        className:
          children === '모집 중'
            ? 'bg-content-color py-1 text-white'
            : 'bg-content-transparent py-1 text-white',
      };

    case 'follow':
      return {
        component: 'button',
        className:
          children === '팔로잉'
            ? 'flex items-center gap-1 bg-gray600 py-[6px] text-white'
            : 'flex items-center gap-1 bg-primary-color py-[6px] text-white',
        svg: children === '팔로잉' ? 'check' : 'plus',
        alt: children === '팔로잉' ? '체크' : '추가',
        label: children === '팔로잉' ? '해제' : '추가',
      };

    default:
      return {
        component: 'li',
        innerComponent: 'button',
        className:
          children === '전체보기'
            ? 'bg-content-color py-[6px] text-white'
            : 'border border-gray500 py-[6px] text-gray600',
      };
  }
};

const Tag = ({ children, tagType, position = '' }) => {
  const commonClass = 'rounded-2xl px-3 text-paragraph-base';
  let { component, innerComponent, className, extraContent, svg, alt, label } =
    getTagType(tagType, children);

  const Component =
    component === 'button' ? 'button' : component === 'li' ? 'li' : 'span';
  const InnerComponent = innerComponent ? innerComponent : null;

  return (
    <Component className={`${commonClass} ${className} ${position}`.trim()}>
      {svg && (
        <img
          src={`/src/assets/common/${svg}-white.svg`}
          alt={`팔로우 ${alt}`}
          className="h-3 w-3"
        />
      )}
      {children}
      {extraContent}
    </Component>
  );
};

export default Tag;
