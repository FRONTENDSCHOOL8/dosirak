import MainNavBar from '@/components/molecule/common/MainNavBar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <main className="flex h-screen justify-center bg-tertiary-color ">
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
