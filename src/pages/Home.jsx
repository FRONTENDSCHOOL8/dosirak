import MainNavBar from '@/components/molecule/common/MainNavBar';
import HomeHeader from '@/components/organism/home/HomeHeader';
import HomeInfo from '@/components/organism/home/HomeInfo';
import HomeMain from '@/components/organism/home/HomeMain';

export const Component = () => {
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
