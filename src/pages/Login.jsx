import SectionInfo from '@/components/molecule/login/SectionInfo';
import LoginForm from '@/components/organism/login/LoginForm';
import EtcSection from '@/components/organism/login/EtcSection';

export const Component = () => {
  return (
    <section className="flex h-screen items-center">
      <h2 className="sr-only">로그인</h2>
      <div className="mx-9 flex w-full flex-col gap-[30px]">
        <SectionInfo />
        <LoginForm />
        <EtcSection />
      </div>
    </section>
  );
};

Component.displayName = 'Login';
