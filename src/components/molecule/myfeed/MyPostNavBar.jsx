import { NavLink } from 'react-router-dom';

const MyPostNavBar = () => {
  return (
    <ul className="noto mt-[38px] flex w-full border-b-[3px] text-center">
      <li className="relative flex-grow pb-2 text-paragraph-lg after:absolute after:-bottom-1 after:left-0 after:h-[3px] after:w-full after:rounded-lg after:bg-primary-color after:content-['']">
        <NavLink className="font-bold text-primary-color">게시글</NavLink>
      </li>
      <li className="flex-grow text-paragraph-lg text-gray500">
        <NavLink className="">임시저장</NavLink>
      </li>
      <li className="flex-grow text-paragraph-lg text-gray500">
        <NavLink className="">비공개</NavLink>
      </li>
    </ul>
  );
};

export default MyPostNavBar;
