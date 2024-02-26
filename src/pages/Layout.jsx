import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <main className="bg-tertiary-color flex h-screen justify-center ">
      <div className="flex lg:max-w-screen-lg">
        <section className="hidden w-[594px] bg-slate-600 lg:block">
          <h2 className="sr-only">한 끼 도시락</h2>
        </section>
        <div className="w-[430px] bg-white">
          <Outlet />
        </div>
      </div>
    </main>
  );
};

export default Layout;
