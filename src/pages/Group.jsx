import NavBar from '@/components/molecule/navbar/NavBar';
import { NavLink, Outlet } from 'react-router-dom';

const groupPath = [
  { path: '/group/popular', children: '인기' }, // => item
  { path: '/group/recent', children: '최신' }, // => item
  { path: '/group/mygroup', children: '내 모임' }, // => item
];

export const Component = () => {
  return (
    <div className="GroupLayout">
      <header>
        [header]
        <NavBar path={groupPath} />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>[footer]</footer>
    </div>
  );
};

Component.displayName = 'Group';
