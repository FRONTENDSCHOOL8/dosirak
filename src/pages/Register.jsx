import { Link } from 'react-router-dom';
import { ReactComponent as Prev } from '@/assets/header/prev.svg';
import ButtonSection from '@/components/molecule/register/Sections/ButtonSection';
import RegisterForm from '@/components/organism/register/RegisterForm';
import RegisterStatusBar from '@/components/molecule/register/RegisterStatusBar';
import useRegisterStore from '@/store/useRegisterStore';

export const Component = () => {
  const { clearRegisterState } = useRegisterStore((state) => state);

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
      <ButtonSection />
    </section>
  );
};

Component.displayName = 'Register';
