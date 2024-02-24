import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <div>헤더</div>
      <div>
        메인
        <Outlet />
      </div>
      <div>푸터</div>
    </>
  );
};

export default Layout;
