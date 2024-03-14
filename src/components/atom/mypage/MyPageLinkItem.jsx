import { Link } from 'react-router-dom';

const MyPageLinkItem = ({ path, children }) => {
  return (
    <div className="px-9 py-5">
      <Link to={path} className="flex items-center justify-between">
        {children}
        <img src="/assets/mypage/arrow.svg" alt="링크 이동" />
      </Link>
    </div>
  );
};

export default MyPageLinkItem;
