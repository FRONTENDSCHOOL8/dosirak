import LoginInfoSection from '@/components/molecule/register/LoginInfoSection';
import NameSection from '@/components/molecule/register/NameSection';
import PhoneSection from '@/components/molecule/register/PhoneSection';
import TermSection from '@/components/molecule/register/TermSection';

const RegisterForm = () => {
  return (
    <form className="register-form flex w-[1720px]">
      <NameSection />
      <PhoneSection />
      <LoginInfoSection />
      <TermSection />
    </form>
  );
};

export default RegisterForm;
