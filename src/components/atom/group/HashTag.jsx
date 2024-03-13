const HashTag = ({ children, round }) => {
  let tagType;
  tagType = round
    ? 'rounded-xl border border-gray300 px-2 py-[3px] text-gray50'
    : 'text-gray700';
  return <li className={`noto text-paragraph-sm ${tagType}`}># {children}</li>;
};

export default HashTag;
