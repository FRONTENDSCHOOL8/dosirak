import SectionInfo from '@/components/molecule/login/SectionInfo';
import LoginForm from '@/components/organism/login/LoginForm';
import EtcSection from '@/components/organism/login/EtcSection';
import useCommonStore from '@/store/useCommonStore';
import Spinner from '@/components/atom/common/Spinner';

export const Component = () => {
  const { isPending } = useCommonStore((state) => state);

  return (
    <section className="relative flex h-screen items-center">
      <h2 className="sr-only">로그인</h2>
      <div className="mx-9 flex w-full flex-col gap-[30px]">
        <SectionInfo />
        <LoginForm />
        <EtcSection />
      </div>
      {isPending && (
        <Spinner
          textArray={[
            '한 끼 레시피 찾는 중...',
            '소갈비찜 만드는 중...',
            '도시락 포장 중...',
          ]}
        />
      )}
    </section>
  );
};

Component.displayName = 'Login';
