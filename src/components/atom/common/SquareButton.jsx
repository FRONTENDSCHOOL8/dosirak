import { Link } from 'react-router-dom';

const SquareButton = ({ children, type = 'button' }) => {
  const baseClass =
    'noto h-12 w-full rounded-[5px] bg-primary-color text-label text-white';
  return type === 'link' ? (
    <Link to="/">
      <div className={`${baseClass} flex items-center justify-center`}>
        {children}
      </div>
    </Link>
  ) : (
    <button className={baseClass}>{children}</button>
  );
};
export default SquareButton;
