import MainNavBar from '@/components/molecule/common/MainNavBar';
import NavBar from '@/components/molecule/navbar/NavBar';
import { useLoginUserInfo } from '@/hook';

export const Component = () => {
  const userInfo = useLoginUserInfo();

  return (
    <>
      <section className="flex h-fit min-h-screen flex-col">
        <header>
          <img
            src="/assets/common/logo.svg"
            alt=""
            className="h-[40px] w-[74px]"
          />
        </header>
        <section className="flex ">
          <section className="relative flex h-fit min-h-screen flex-col">
            <h2>홈</h2>
            <span>{userInfo.nickname}님 안녕하세요!</span>
          </section>
        </section>
        <MainNavBar />
      </section>
    </>
  );
};

Component.displayName = 'Home';
