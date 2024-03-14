import { Link } from 'react-router-dom';
import { ReactComponent as Prev } from '@/assets/header/prev.svg';

const SettingsHeader = () => {
  return (
    <header className="fixed top-0 z-10 w-[430px] bg-white shadow-[0_4px_4px_0_rgba(204,204,204,0.25)] mobile:w-screen">
      <div className="relative flex h-20 items-end justify-between px-9 pb-[18px]">
        <h1 className="flex items-center gap-3 font-Gong-Gothic-m text-heading-lg">
          <Link to={-1}>
            <Prev />
          </Link>
          설정
        </h1>
      </div>
    </header>
  );
};

export default SettingsHeader;
