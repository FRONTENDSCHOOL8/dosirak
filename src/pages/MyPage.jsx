import { Outlet } from 'react-router-dom';

export const Component = () => {
  return (
    <div>
      마이페이지임
      <Outlet />
    </div>
  );
};

Component.displayName = 'mypage';
