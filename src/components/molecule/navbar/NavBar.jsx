import { NavLink } from 'react-router-dom';

const styleClass = ({ isActive }) => {
  const defaultStyle = 'font-heading-sm font-Gong-Gothic-m text-gray500';

  return isActive
    ? `${defaultStyle} relative text-primary-color before:absolute before:-bottom-[11px] before:rounded-full before:bg-primary-color before:content-[''] before:w-full before:h-1 after:absolute after:-z-[1] after:-right-1 after:-top-0.5 after:size-2 after:rounded-full after:bg-secondary-color after:content-['']`
    : defaultStyle;
};

const NavBar = ({ children, path }) => {
  return (
    <nav className="noto fixed top-0 z-10 flex h-[112px] w-[430px] flex-col bg-white pt-[22px]">
      <div className="flex-grow px-9">
        <h3 className="text-heading-lg font-extrabold">{children}</h3>
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
