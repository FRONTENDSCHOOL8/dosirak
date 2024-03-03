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
      className="flex h-screen justify-center bg-tertiary-color "
      onClick={handleFeedClose}
    >
      <div className="lg:max-w-screen-lg flex">
        <section className="flex w-[594px] bg-white tablet:hidden">
          <QrCode />
        </section>
        <div className=" w-[430px] min-w-[372px] bg-white pb-[95px] mobile:w-screen">
          <Outlet />
          <MainNavBar />
        </div>
      </div>
    </main>
  );
};

export default Layout;
