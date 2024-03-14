import { Link } from 'react-router-dom';
import { ReactComponent as Arrow } from '@/assets/common/arrow.svg';

const ParticipateInfo = ({ number, children, url }) => {
  return (
    <Link
      to={`/${url}`}
      className="flex h-[128px] w-[169px] flex-col rounded-2xl border-2 bg-white py-[22px] pe-[18px] ps-[22px] shadow-[0_1px_4px_2px_rgba(171,171,171,0.25)]"
    >
      <span className="mb-5 font-Noto text-label text-content-color">
        내 {children}
      </span>
      <div className="flex h-[30px] w-[129px] items-end justify-between">
        <strong className="font-Gong-Gothic-m text-heading-lg leading-5">
          {number}
        </strong>
        <span className="noto flex-grow text-paragraph-lg leading-4">
          개의 {children}
        </span>
        <div className="right-0 ">
          <Arrow />
        </div>
      </div>
    </Link>
  );
};

export default ParticipateInfo;
