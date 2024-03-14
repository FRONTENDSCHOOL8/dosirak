import { Link } from 'react-router-dom';
import { ReactComponent as Bell } from '@/assets/common/alarm.svg';

const HeaderButtonArea = () => {
  return (
    <ul className="flex gap-[22px]">
      <li className="">
        <Link to="/" aria-label="알림">
          <Bell />
        </Link>
      </li>
      <li>
        <Link to="/">
          <img src="/assets/common/bookmark-false.svg" alt="북마크" />
        </Link>
      </li>
    </ul>
  );
};

export default HeaderButtonArea;
