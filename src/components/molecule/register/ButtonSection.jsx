import gsap from 'gsap';
import useRegisterStore from '@/store/useRegisterStore';
import { useEffect } from 'react';

const STEP_TRANSITION = [
  { x: 0, width: '25%' },
  { x: -430, width: '50%' },
  { x: -860, width: '75%' },
  { x: -1290, width: '100%' },
];

const ButtonSection = () => {
  const { step, nextStep, prevStep } = useRegisterStore((state) => state);

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

  return (
    <section className="flex flex-col gap-4 px-9 lg:mt-8">
      {step < 3 && (
        <button
          type="button"
          className="noto h-14 w-full rounded-md border-2 border-primary-color text-label text-primary-color"
          onClick={nextStep}
        >
          다음으로
        </button>
      )}
      {step == 3 && (
        <button
          type="submit"
          className="noto h-14 w-full rounded-md border-2 border-primary-color text-label text-primary-color "
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
