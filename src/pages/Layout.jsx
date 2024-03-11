import useFeedStore from '@/store/useFeedStore';
import { Outlet, useParams, useNavigate } from 'react-router-dom';
import QrCode from '@/pages/QrCode';

const Layout = () => {
  const { expandFeed, setExpandFeed, commentView, setCommentView } =
    useFeedStore((state) => state);
  const navigate = useNavigate();
  const { feedType } = useParams();

  const handleFeedClose = (e) => {
    handleFeedContract(e);
    handleFeedCommentClose(e);
  };

  const handleFeedContract = (e) => {
    if (expandFeed && !commentView && !e.target.closest('.feed-text')) {
      setExpandFeed('');
    }
  };

  const handleFeedCommentClose = (e) => {
    if (commentView && feedType && !e.target.closest('.comment-window')) {
      setCommentView('');
      navigate(`/feed/${feedType}`);
    }
  };

  return (
    <main
      className="flex justify-center bg-primary-color"
      onClick={handleFeedClose}
    >
      <div className="relative flex w-[1024px] justify-center">
        <section className="fixed left-[calc(50%-512px)] flex h-screen w-[594px] bg-gray100 tablet:hidden">
          <QrCode />
        </section>
        <div className="relative h-fit w-[430px] min-w-[372px] bg-white mobile:w-screen lg:ms-auto">
          <Outlet />
        </div>
      </div>
    </main>
  );
};

export default Layout;
