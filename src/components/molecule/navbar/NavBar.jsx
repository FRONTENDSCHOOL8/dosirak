import { NavLink } from 'react-router-dom';

const styleClass = ({ isActive }) => {
  const defaultStyle = 'font-heading-sm font-Gong-Gothic-m text-gray500';

  return isActive ? `${defaultStyle} text-primary-color` : defaultStyle;
};

const NavBar = ({ path }) => {
  return (
    <nav>
      <ul className="fixed top-0 z-10 flex h-[112px] w-[430px] justify-start gap-[36px] bg-white px-[36px] pb-[35px] pt-[72px] shadow-[0_4px_4px_0_rgba(204,204,204,0.25)] mobile:w-full">
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
