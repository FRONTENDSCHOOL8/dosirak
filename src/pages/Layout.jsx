import MainNavBar from '@/components/molecule/common/MainNavBar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <main className="flex h-screen justify-center bg-tertiary-color ">
      <div className="flex lg:max-w-screen-lg">
        <section className="tablet:hidden w-[594px] bg-slate-600">
          <h2 className="sr-only">한 끼 도시락</h2>
        </section>
        <div className=" mobile:w-screen w-[430px] min-w-[372px] bg-white">
          <Outlet />
          <MainNavBar />
        </div>
      </div>
    </main>
  );
};

export default Layout;
