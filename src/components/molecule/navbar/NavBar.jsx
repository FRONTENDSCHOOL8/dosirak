import { NavLink, Link } from 'react-router-dom';

const styleClass = ({ isActive }) => {
  const defaultStyle = 'font-heading-sm font-Gong-Gothic-m text-gray500';

  return isActive
    ? `${defaultStyle} relative text-primary-color before:absolute before:-bottom-[11px] before:rounded-full before:bg-primary-color before:content-[''] before:w-full before:h-1 after:absolute after:-z-[1] after:-right-1 after:-top-0.5 after:size-2 after:rounded-full after:bg-secondary-color after:content-['']`
    : defaultStyle;
};

const NavBar = ({ children, path, type }) => {
  return (
    <nav className="noto fixed top-0 z-20 flex h-[112px] w-[430px] select-none flex-col bg-white pt-[22px] mobile:w-screen">
      <div className="flex flex-grow justify-between px-9">
        <h3 className="text-heading-lg font-extrabold">{children}</h3>
        <div className="flex h-6 gap-4 pt-2">
          {type === 'feed' && (
            <Link to={`/${type}/write`}>
              <img src={`/assets/${type}/write.svg`} alt="글쓰기" />
            </Link>
          )}
          {type === 'group' && (
            <Link to={`/groupadd`}>
              <img src={`/assets/${type}/add.svg`} alt="생성" />
            </Link>
          )}
          <Link to={`/${type}/search`}>
            <img src={`/assets/${type}/search.svg`} alt="검색" />
          </Link>
        </div>
      </div>
      <ul className="flex justify-start gap-9 px-9 pb-1.5 shadow-[0_4px_4px_0_rgba(204,204,204,0.25)] mobile:w-full">
        {path.map((item) => {
          return (
            <li key={item.children}>
              <NavLink to={item.path} className={styleClass}>
                {item.children}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavBar;
