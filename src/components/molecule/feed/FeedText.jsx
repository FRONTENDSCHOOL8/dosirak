import FeedSubject from '@/components/atom/feed/FeedSubject';
import ViewMore from '@/components/atom/feed/ViewMore';
import useFeedStore from '@/store/useFeedStore';

const FeedText = ({ feed }) => {
  const { expandFeed } = useFeedStore((state) => state);

  const mainTextExpandStyle =
    expandFeed === feed.id
      ? {
          lineHeight: '21px',
          maxHeight: '9999px',
          transition: 'all ease-in-out 3s ',
          // overflowY: 'scroll',
        }
      : {
          display: '-webkit-box',
          wordWrap: 'break-word',
          WebkitLineClamp: '2',
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          lineHeight: '21px',
          maxHeight: '42px',
        };

  return (
    <section className="relative ">
      <div
        style={mainTextExpandStyle}
        className="overflow-hidden pb-4"
        dangerouslySetInnerHTML={{ __html: feed.maintext }}
      ></div>
      <ViewMore feedId={feed.id} />
    </section>
  );
};

export default FeedText;
