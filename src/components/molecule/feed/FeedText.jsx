import FeedSubject from '@/components/atom/feed/FeedSubject';
import ViewMore from '@/components/atom/feed/ViewMore';
import { useState } from 'react';

const FeedText = ({ feed }) => {
  const [isExpand, setIsExpand] = useState(false);

  const handleExpand = () => {
    setIsExpand((isExpand) => !isExpand);
  };

  const mainTextExpandStyle = isExpand
    ? {
        zIndex: '20',
        background: 'white',
        position: 'absolute',
        top: '-310px',
      }
    : {
        display: '-webkit-box',
        wordWrap: 'break-word',
        WebkitLineClamp: '2',
        WebkitBoxOrient: 'vertical',
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        lineHeight: '21px',
        height: '42px',
      };

  return (
    <section className="relative">
      <div style={mainTextExpandStyle} className="flex flex-col gap-2">
        {isExpand && <FeedSubject feed={feed} />}
        <div dangerouslySetInnerHTML={{ __html: feed.maintext }}></div>
        <ViewMore onClick={handleExpand} isExpand={isExpand} />
      </div>
    </section>
  );
};

export default FeedText;
