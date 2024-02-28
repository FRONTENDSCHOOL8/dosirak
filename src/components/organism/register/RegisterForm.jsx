import LoginInfoSection from '@/components/molecule/register/Sections/LoginInfoSection';
import NameSection from '@/components/molecule/register/Sections/NameSection';
import PhoneSection from '@/components/molecule/register/Sections/PhoneSection';
import TermSection from '@/components/molecule/register/Sections/TermSection';
import ButtonSection from '@/components/molecule/register/Sections/ButtonSection';
import useRegisterStore from '@/store/useRegisterStore';
import { pb } from '@/util';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const fetchRegister = async (data) => {
  const result = await pb.collection('users').create(data);

  return result;
};

const RegisterForm = () => {
  const { clearRegisterState, setIsPending } = useRegisterStore(
    (state) => state
  );
  const navigate = useNavigate();
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(formRef.current);
    const registerData = {};

    for (let key of formData.keys()) {
      registerData[key] = formData.get(key);
    }

    setIsPending(true);
    fetchRegister(registerData).then(() => {
      alert('회원가입이 완료되었습니다!\n로그인하고 한 끼 드셔보세요!');
      navigate('/login');
      clearRegisterState();
      setTimeout(() => setIsPending(false), 1000);
    });
  };

  return (
    <form onSubmit={handleSubmit} ref={formRef}>
      <div className="register-form flex w-[1720px]">
        <NameSection />
        <PhoneSection />
        <LoginInfoSection />
        <TermSection />
      </div>
      <ButtonSection />
    </form>
  );
};

export default RegisterForm;
