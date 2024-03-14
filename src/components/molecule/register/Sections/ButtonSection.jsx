import gsap from 'gsap';
import useRegisterStore from '@/store/useRegisterStore';
import { useEffect, forwardRef } from 'react';
import { TERM_LIST } from './TermSection';

const { innerWidth } = window;

const getWidth = (index) => {
  if (innerWidth < 430) return -1 * index * innerWidth;

  return -1 * index * 430;
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
    isCheckAuth,
    isIdDuplicate,
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
      }
      case 1: {
        if (isCheckAuth === 1) return false;
      }
      case 2: {
        if (
          !isIdDuplicate &&
          passwordValue === confirmValue &&
          /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(passwordValue)
        )
          return false;
      }
      case 3: {
        const requireList = TERM_LIST.filter((v) => v.required).map(
          (item) => item.name
        );

        const isRequireChecked = requireList.filter((item) =>
          checkValue.includes(item)
        );

        if (isRequireChecked.length === requireList.length) return false;
      }
    }

    return true;
  };

  return (
    <section className="mobile:w-screen mt-8 flex w-[430px] flex-col gap-4 px-9">
      {step < 3 && (
        <button
          type="button"
          className="noto h-14 w-full rounded-md border-[1px] border-primary-color bg-primary-color text-label text-white disabled:bg-white disabled:text-primary-color"
          disabled={stepDisable()}
          onClick={nextStep}
        >
          다음으로
        </button>
      )}
      {step == 3 && (
        <button
          type="submit"
          className="noto h-14 w-full rounded-md border-[1px] border-primary-color bg-primary-color text-label text-white disabled:bg-white disabled:text-primary-color"
          disabled={stepDisable()}
        >
          가입하기
        </button>
      )}
      {step > 0 && (
        <button
          type="button"
          className="noto h-14 w-full rounded-md border-[1px] border-primary-color bg-primary-color text-label text-white"
          onClick={prevStep}
        >
          이전으로
        </button>
      )}
    </section>
  );
};

export default ButtonSection;
