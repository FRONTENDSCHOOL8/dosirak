import MainNavBar from '@/components/molecule/common/MainNavBar';
import MyPageHeader from '@/components/organism/mypage/MyPageHeader';
import MyPageMain from '@/components/organism/mypage/MyPageMain';
import { Outlet } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

export const Component = () => {
  const location = useLocation();
  const { pathname } = location;

  return (
    <>
      <section className="relative flex h-fit min-h-screen flex-col gap-3 bg-gray100 pb-[95px]">
        <MyPageHeader />
        {pathname === '/mypage' ? <MyPageMain /> : <Outlet />}
      </section>
      <MainNavBar />
    </>
  );
};

Component.displayName = 'mypage';
