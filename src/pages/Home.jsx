import MainNavBar from '@/components/molecule/common/MainNavBar';
import HomeHeader from '@/components/organism/home/HomeHeader';
import HomeInfo from '@/components/organism/home/HomeInfo';
import HomeMain from '@/components/organism/home/HomeMain';
import { useLoginUserInfo } from '@/hook';
import { useLayoutEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const Component = () => {
  const userInfo = useLoginUserInfo();
  const navigate = useNavigate();

  useLayoutEffect(() => {
    if (!Object.keys(userInfo).length) {
      alert('로그인 후 이용 가능합니다.');
      navigate('/login');
    }
  }, []);

  return (
    <section className="h-fit min-h-screen">
      <HomeHeader />
      <HomeMain />
      <HomeInfo />
      <MainNavBar />
    </section>
  );
};

Component.displayName = 'Home';
