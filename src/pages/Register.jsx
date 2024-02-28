import { Link } from 'react-router-dom';
import { ReactComponent as Prev } from '@/assets/header/prev.svg';
import RegisterForm from '@/components/organism/register/RegisterForm';
import RegisterStatusBar from '@/components/molecule/register/RegisterStatusBar';
import useRegisterStore from '@/store/useRegisterStore';
import Spinner from '@/components/atom/common/Spinner';

export const Component = () => {
  const { clearRegisterState, isPending } = useRegisterStore((state) => state);

  return (
    <section className="relative flex h-full flex-col items-stretch gap-4 overflow-hidden">
      <section className="absolute z-10 flex h-[55px] w-full items-end px-9 pb-2">
        <Link
          to="/login"
          className="absolute bottom-[13px] left-9"
          onClick={clearRegisterState}
        >
          <Prev />
        </Link>
        <h2 className="w-full text-center font-Gong-Gothic-l text-heading-sm">
          회원가입
        </h2>
        <RegisterStatusBar />
      </section>
      <RegisterForm />
      {isPending && (
        <Spinner
          textArray={[
            '한 끼 만드는 중...',
            '탕수육 만드는 중...',
            '도시락 포장 중...',
          ]}
        />
      )}
    </section>
  );
};

Component.displayName = 'Register';
