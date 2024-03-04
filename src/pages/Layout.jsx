import MainNavBar from '@/components/molecule/common/MainNavBar';
import useFeedStore from '@/store/useFeedStore';
import { useNavigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import QrCode from '@/pages/QrCode';

const Layout = () => {
  const { expandFeed, setExpandFeed, commentView, setCommentView } =
    useFeedStore((state) => state);
  const navigate = useNavigate();

  const handleFeedClose = (e) => {
    if (
      expandFeed &&
      !commentView &&
      (e.target.nodeName === 'SECTION' ||
        e.target.nodeName === 'MAIN' ||
        e.target.nodeName === 'UL')
    ) {
      setExpandFeed('');
    }

    if (
      commentView &&
      (e.target.nodeName === 'SECTION' || e.target.nodeName === 'MAIN')
    ) {
      setCommentView('');
      navigate('/feed', { replace: true });
    }
  };

  return (
    <main
      className="flex justify-center bg-primary-color"
      onClick={handleFeedClose}
    >
      <div className="relative flex w-[1024px] justify-center">
        <section className="fixed left-[calc(50%-512px)] flex h-screen w-[594px] bg-gray-100 tablet:hidden">
          <QrCode />
        </section>
        <div className="lg:ms-auto relative h-fit w-[430px] min-w-[372px] bg-white mobile:w-screen">
          <Outlet />
        </div>
      </div>
    </main>
  );
};

export default Layout;
