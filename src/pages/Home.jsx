import MainNavBar from '@/components/molecule/common/MainNavBar';
import { useLoginUserInfo } from '@/hook';

export const Component = () => {
  const userInfo = useLoginUserInfo();

  return (
    <>
      <section className="relative flex h-fit min-h-screen flex-col">
        <h2>홈</h2>
        <span>{userInfo.nickname}님 안녕하세요!</span>
      </section>
      <MainNavBar />
    </>
  );
};

Component.displayName = 'Home';
