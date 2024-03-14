import { ReactComponent as Alarm } from '@/assets/common/alarm.svg';
import { ReactComponent as Setting } from '@/assets/common/setting.svg';
import { Link } from 'react-router-dom';

const MyPageHeader = () => {
  return (
    <header className="fixed top-0 z-10 w-[430px] bg-white shadow-[0_4px_4px_0_rgba(204,204,204,0.25)] mobile:w-screen">
      <div className="relative flex h-20 items-end justify-between px-9 pb-[18px]">
        <span className="font-Gong-Gothic-m text-heading-lg">마이페이지</span>
        <div className="flex h-9 items-center gap-4">
          <Link>
            <Alarm />
          </Link>
          <Link to={'/settings'}>
            <Setting />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default MyPageHeader;
