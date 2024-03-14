import useRegisterStore from '@/store/useRegisterStore';

const CurrentStep = () => {
  const step = useRegisterStore((state) => state.step);

  return (
    <p className="mb-1 h-7 w-7 rounded-full bg-primary-color text-center text-[16px] leading-8 text-white">
      {step + 1}
    </p>
  );
};

export default CurrentStep;
