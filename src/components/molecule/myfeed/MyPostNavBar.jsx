import { NavLink } from 'react-router-dom';

const MyPostNavBar = () => {
  return (
    <ul className="mt-[38px] flex w-full text-center">
      <li className="noto flex-grow border-b-2 border-b-primary-color text-paragraph-lg text-gray500">
        <NavLink to={'/'} className="">
          게시글
        </NavLink>
      </li>
      <li className="noto flex-grow border-b-2 border-b-secondary-color text-paragraph-lg text-gray500">
        <NavLink to={'/'} className="">
          임시저장
        </NavLink>
      </li>
      <li className="noto flex-grow border-b-2 border-b-tertiary-color text-paragraph-lg text-gray500">
        <NavLink to={'/'} className="">
          비공개
        </NavLink>
      </li>
    </ul>
  );
};

export default MyPostNavBar;
