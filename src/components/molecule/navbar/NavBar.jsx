import { NavLink } from 'react-router-dom';

// const assignActiveClassNames = ({ isActive }) => {
//   const activeClassName = isActive ? ActiveStyle.active : ' ';
//   return;
// };

// "flex-start inline-flex items-center justify-between gap-5 bg-slate-100
// flex-start inline-flex gap-x-36 gap-y-5

const styleClass = ({ isActive }) => {
  const defaultStyle = 'font-heading-sm font-Gong-Gothic-m text-gray500';

  return isActive ? `${defaultStyle} text-primary-color` : defaultStyle;
};

const NavBar = ({ path }) => {
  return (
    <nav>
      <ul className="mobile:w-full fixed top-0 flex h-[112px] w-[430px] justify-start gap-[36px] px-[36px] pb-[35px] pt-[72px] shadow-[0_4px_4px_0_rgba(204,204,204,0.25)]">
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
