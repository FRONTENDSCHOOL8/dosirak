import NavBar from '@/components/molecule/navbar/NavBar';
import { NavLink, Outlet } from 'react-router-dom';

const feedPath = [
  { path: '/feed/recommend', children: '추천' },
  { path: '/feed/popular', children: '인기' },
  { path: '/feed/following', children: '팔로잉' },
  { path: '/feed/myfeed', children: '내 피드' },
];

export const Component = () => {
  return (
    <div className="FeedLayout">
      <header>[header]</header>
      <NavBar path={feedPath} />
      <main>
        <Outlet />
      </main>
      <footer>[footer]</footer>
    </div>
  );
};

Component.displayName = 'Feed';

{
  /* <nav>
<ul className="flex gap-2 bg-slate-100">
  <li>
    <NavLink to="/feed/recommend">추천</NavLink>
  </li>
  <li>
    <NavLink to="/feed/popular">인기</NavLink>
  </li>
  <li>
    <NavLink to="/feed/following">팔로잉</NavLink>
  </li>
  <li>
    <NavLink to="/feed/myfeed">내 피드</NavLink>
  </li>
</ul>
</nav> */
}
