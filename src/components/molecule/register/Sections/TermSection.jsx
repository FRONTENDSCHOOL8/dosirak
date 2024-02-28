import SectionInfo from './SectionInfo';

const TermSection = () => {
  return (
    <section className="step-2 mobile:w-screen mt-28 flex w-[430px] flex-col gap-6 px-9">
      <SectionInfo>
        <p>약관에 동의하시면</p> <p>회원가입이 완료됩니다.</p>
      </SectionInfo>
      <div className="flex items-center gap-3 rounded-lg p-5 shadow-[0_0_4px_2px_rgba(204,204,204,0.3)]">
        <input
          type="checkbox"
          name="allCheck"
          id="allCheck"
          className="h-[30px] w-[30px] appearance-none bg-[url('@/assets/register/circle-uncheck.svg')] bg-center bg-no-repeat checked:bg-[url('@/assets/register/circle-check.svg')]"
        />
        <label
          htmlFor="allCheck"
          className="noto select-none text-[20px] font-bold text-primary-color"
        >
          약관 전체 동의
        </label>
      </div>
      <div className="flex flex-col items-start gap-3 rounded-lg p-5">
        <div className="relative flex w-full items-center gap-3">
          <input
            type="checkbox"
            name="service"
            id="service"
            className="h-[30px] w-[30px] appearance-none bg-[url('@/assets/register/uncheck.svg')] bg-center bg-no-repeat checked:bg-[url('@/assets/register/check.svg')] [&:checked+label]:text-primary-color"
          />
          <label
            htmlFor="service"
            className="noto select-none text-paragraph-lg text-gray500"
          >
            서비스 이용 약관 (필수)
          </label>
          <button
            type="button"
            className="noto absolute right-0 text-primary-color"
          >
            보기
          </button>
        </div>
        <div className="relative flex w-full items-center gap-3">
          <input
            type="checkbox"
            name="personal-info"
            id="personal-info"
            className="h-[30px] w-[30px] appearance-none bg-[url('@/assets/register/uncheck.svg')] bg-center bg-no-repeat checked:bg-[url('@/assets/register/check.svg')] [&:checked+label]:text-primary-color"
          />
          <label
            htmlFor="personal-info"
            className="noto select-none text-paragraph-lg text-gray500"
          >
            개인정보 처리방침 (필수)
          </label>
          <button
            type="button"
            className="noto absolute right-0 text-primary-color"
          >
            보기
          </button>
        </div>
        <div className="relative flex w-full items-center gap-3">
          <input
            type="checkbox"
            name="marketing"
            id="marketing"
            className="h-[30px] w-[30px] appearance-none bg-[url('@/assets/register/uncheck.svg')] bg-center bg-no-repeat checked:bg-[url('@/assets/register/check.svg')] [&:checked+label]:text-primary-color"
          />
          <label
            htmlFor="marketing"
            className="noto select-none text-paragraph-lg text-gray500"
          >
            마케팅 정보 수신 동의 (선택)
          </label>
          <button
            type="button"
            className="noto absolute right-0 text-primary-color"
          >
            보기
          </button>
        </div>
      </div>
    </section>
  );
};

export default TermSection;
