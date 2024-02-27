import SectionInfo from './SectionInfo';
import FormInput from './../FormInput/FormInput';
import useRegisterStore from '@/store/useRegisterStore';

const PhoneSection = () => {
  const { phoneValue, authValue, setPhoneValue, setAuthValue } =
    useRegisterStore((state) => state);

  return (
    <section className="step-2 mt-40 flex w-[430px] flex-col gap-16 px-9">
      <SectionInfo>
        <p>휴대폰 번호를 알려주세요.</p>
      </SectionInfo>
      <FormInput
        category="phone"
        hasButton
        buttonType="requestAuth"
        value={phoneValue}
        updater={setPhoneValue}
      >
        휴대폰 번호
      </FormInput>
      <FormInput
        category="auth"
        hasButton
        buttonType="auth"
        value={authValue}
        updater={setAuthValue}
      >
        인증 번호
      </FormInput>
    </section>
  );
};

export default PhoneSection;

{
  /* <div className="relative flex flex-col gap-2">
        <label
          htmlFor="phone"
          className="noto px-1 text-label text-primary-color"
        >
          휴대폰 번호
        </label>
        <input
          type="text"
          id="phone"
          placeholder="휴대폰 번호 입력"
          className="h-8 w-full border-b-2 border-gray300 px-1 text-paragraph-base outline-none focus:border-primary-color"
        />
        <button
          type="button"
          className="absolute bottom-2 right-0 w-[83px] rounded-2xl bg-primary-color px-2 py-1 text-paragraph-lg text-white"
        >
          인증 요청
        </button>
      </div> */
}
{
  /* <div className="relative flex flex-col gap-2">
        <label
          htmlFor="auth"
          className="noto px-1 text-label text-primary-color"
        >
          인증 번호
        </label>
        <input
          type="text"
          id="auth"
          placeholder="인증 번호 입력"
          className="h-8 w-full border-b-2 border-gray300 px-1 text-paragraph-base outline-none focus:border-primary-color"
        />
        <button
          type="button"
          className="absolute bottom-2 right-0 w-[83px] rounded-2xl border-[1px] border-primary-color bg-white px-2 py-1 text-paragraph-lg text-primary-color"
        >
          확인
        </button>
      </div> */
}