import useFeedStore from '@/store/useFeedStore';

const ViewMore = ({ feedId }) => {
  const { expandFeed, setExpandFeed } = useFeedStore((state) => state);
  const isExpand = expandFeed === feedId;

  const handleMainTextExpand = () => {
    if (expandFeed === feedId) setExpandFeed(feedId);
  };

  return (
    <div
      style={{
        background:
          'linear-gradient(90deg, rgba(2, 0, 36, 1) 0%,rgba(255, 255, 255, 0) 0%,rgba(255, 255, 255, 1) 18%)',
      }}
      className="absolute -bottom-[1px] right-0 z-20 ps-2"
    >
      {!isExpand && <span>... </span>}
      <button
        onClick={handleMainTextExpand}
        className="bg-white text-paragraph-lg text-gray-600 underline"
      >
        {!isExpand ? '더보기' : '접기'}
      </button>
    </div>
  );
};

export default ViewMore;
