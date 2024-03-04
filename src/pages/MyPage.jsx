import MainNavBar from '@/components/molecule/common/MainNavBar';

export const Component = () => {
  return (
    <>
      <section className="relative flex h-fit min-h-screen flex-col">
        <h2>마이페이지임</h2>
      </section>
      <MainNavBar />
    </>
  );
};

Component.displayName = 'mypage';
