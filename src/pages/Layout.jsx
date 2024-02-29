import MainNavBar from '@/components/molecule/common/MainNavBar';
import useFeedStore from '@/store/useFeedStore';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  const { setExpandFeed } = useFeedStore((state) => state);
  const handleFeedClose = (e) => {
    if (
      e.target.nodeName === 'SECTION' ||
      e.target.nodeName === 'MAIN' ||
      e.target.nodeName === 'UL'
    )
      setExpandFeed('');
  };

  return (
    <main
      className="flex h-screen justify-center bg-tertiary-color "
      onClick={handleFeedClose}
    >
      <div className="lg:max-w-screen-lg flex">
        <section className="w-[594px] bg-slate-600 tablet:hidden">
          <h2 className="sr-only">한 끼 도시락</h2>
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
