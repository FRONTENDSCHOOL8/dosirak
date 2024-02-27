import { Link } from 'react-router-dom';
import { ReactComponent as Prev } from '@/assets/header/prev.svg';
import ButtonSection from '@/components/molecule/register/Sections/ButtonSection';
import RegisterForm from '@/components/organism/register/RegisterForm';
import RegisterStatusBar from '@/components/molecule/register/RegisterStatusBar';
import { useForm } from 'react-hook-form';

export const Component = () => {
  const { register, handleSubmit } = useForm();

  return (
    <section className="relative flex h-full flex-col items-stretch gap-8 overflow-hidden">
      <section className="absolute z-10 flex h-[75px] w-full items-end px-9 pb-2">
        <Link to="/login" className="absolute bottom-[13px] left-9">
          <Prev />
        </Link>
        <h2 className="w-full text-center font-Gong-Gothic-l text-heading-sm">
          회원가입
        </h2>
        <RegisterStatusBar />
      </section>
      <RegisterForm register={register} />
      <ButtonSection />
    </section>
  );
};

Component.displayName = 'Register';
