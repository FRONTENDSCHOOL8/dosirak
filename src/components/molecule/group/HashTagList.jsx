import HashTag from '@/components/atom/group/HashTag';

const HashTagList = ({ hashTagArr, round, position, gap }) => {
  const hashTagDataList = hashTagArr?.map((tag, i) => (
    <HashTag key={i} round={round}>
      {tag}
    </HashTag>
  ));

  return (
    <ul className={`${position} ${gap} relative z-10 flex`}>
      {hashTagDataList}
    </ul>
  );
};

export default HashTagList;
