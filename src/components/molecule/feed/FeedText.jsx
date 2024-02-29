import FeedSubject from '@/components/atom/feed/FeedSubject';
import ViewMore from '@/components/atom/feed/ViewMore';
import useFeedStore from '@/store/useFeedStore';

const FeedText = ({ feed }) => {
  const { expandFeed } = useFeedStore((state) => state);

  const mainTextExpandStyle =
    expandFeed === feed.id
      ? {
          zIndex: '20',
          background: 'white',
          position: 'absolute',
          top: '-310px',
          border: '1px solid var(--gray-300)',
          padding: '12px',
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
        {feed.id === expandFeed && <FeedSubject feed={feed} />}
        <div dangerouslySetInnerHTML={{ __html: feed.maintext }}></div>
        <ViewMore feedId={feed.id} />
      </div>
    </section>
  );
};

export default FeedText;
