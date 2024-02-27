import gsap from 'gsap';
import useRegisterStore from '@/store/useRegisterStore';
import { useEffect } from 'react';

const { innerWidth } = window;

const getWidth = (index) => {
  if (innerWidth < 430) return -1 * index * innerWidth;
  else return -1 * index * 430;
};

const STEP_TRANSITION = [
  { x: getWidth(0), width: '25%' },
  { x: getWidth(1), width: '50%' },
  { x: getWidth(2), width: '75%' },
  { x: getWidth(3), width: '100%' },
];

const ButtonSection = () => {
  const {
    step,
    nextStep,
    prevStep,
    nameValue,
    phoneValue,
    authValue,
    idValue,
    passwordValue,
    confirmValue,
    checkValue,
  } = useRegisterStore((state) => state);

  useEffect(() => {
    handleRegisterForm();
  }, [step]);

  const handleRegisterForm = () => {
    gsap.to('.register-form', {
      x: STEP_TRANSITION[step].x,
      ease: 'power2.inOut',
    });
    gsap.to('.progress', { width: STEP_TRANSITION[step].width, ease: 'none' });
  };

  const stepDisable = () => {
    switch (step) {
      case 0: {
        if (nameValue) return false;
        return true;
      }
      case 1: {
        if (phoneValue && authValue) return false;
        return true;
      }
    }

    return false;
  };

  return (
    <section className="mobile:w-screen flex w-[430px] flex-col gap-4 px-9 lg:mt-8">
      {step < 3 && (
        <button
          type="button"
          className="noto h-14 w-full rounded-md border-2 border-primary-color text-label text-primary-color disabled:border-gray500 disabled:bg-gray500"
          disabled={stepDisable()}
          onClick={nextStep}
        >
          다음으로
        </button>
      )}
      {step == 3 && (
        <button
          type="submit"
          className="noto h-14 w-full rounded-md border-2 border-primary-color text-label text-primary-color disabled:border-gray500 disabled:bg-gray500"
        >
          가입하기
        </button>
      )}
      {step > 0 && (
        <button
          type="button"
          className="noto h-14 w-full rounded-md border-2 border-primary-color text-label text-primary-color"
          onClick={prevStep}
        >
          이전으로
        </button>
      )}
    </section>
  );
};

export default ButtonSection;
