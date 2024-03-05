import MainNavBar from '@/components/molecule/common/MainNavBar';
import NavBar from '@/components/molecule/navbar/NavBar';
import { NavLink, Outlet } from 'react-router-dom';

const groupPath = [
  { path: '/group/popular', children: '인기' }, // => item
  { path: '/group/recent', children: '최신' }, // => item
  { path: '/group/mygroup', children: '내 모임' }, // => item
];

export const Component = () => {
  return (
    <>
      <section className="relative flex h-fit min-h-screen flex-col">
        <header>
          <NavBar path={groupPath}>모임</NavBar>
        </header>
        <main>
          <Outlet />
        </main>
      </section>
      <MainNavBar />
    </>
  );
};

Component.displayName = 'Group';
