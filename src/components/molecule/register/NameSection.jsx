import CurrentStep from '@/components/atom/register/CurrentStep';

const NameSection = () => {
  return (
    <section className="step-1 mt-40 flex w-[430px] flex-col gap-24 px-9">
      <h2 className="font-Gong-Gothic-l text-heading-lg">
        <CurrentStep />
        이름을 알려주세요.
      </h2>
      <div className="flex flex-col gap-2">
        <label
          htmlFor="name"
          className="noto px-1 text-label text-primary-color"
        >
          이름
        </label>
        <input
          type="text"
          id="name"
          placeholder="이름 입력"
          className="h-8 w-full border-b-2 border-gray300 px-1 text-paragraph-base outline-none focus:border-primary-color"
        />
      </div>
    </section>
  );
};

export default NameSection;
