import { ReactComponent as Eye } from '@/assets/register/eye.svg';
import CurrentStep from '@/components/atom/register/CurrentStep';

const LoginInfoSection = () => {
  return (
    <section className="step-2 mt-40 flex w-[430px] flex-col gap-8 px-9">
      <h2 className="font-Gong-Gothic-l text-heading-lg">
        <CurrentStep />
        <p>사용할 아이디와</p> <p>비밀번호를 알려주세요.</p>
      </h2>
      <div className="relative flex flex-col gap-2">
        <label htmlFor="id" className="noto px-1 text-label text-primary-color">
          아이디
        </label>
        <input
          type="text"
          id="id"
          placeholder="아이디 입력"
          className="h-8 w-full border-b-2 border-gray300 px-1 text-paragraph-base outline-none focus:border-primary-color"
        />
        <button
          type="button"
          className="absolute bottom-2 right-0 w-[83px] rounded-2xl bg-primary-color px-2 py-1 text-paragraph-lg text-white"
        >
          중복 확인
        </button>
      </div>
      <div className="relative flex flex-col gap-2">
        <label
          htmlFor="password"
          className="noto px-1 text-label text-primary-color"
        >
          비밀번호
        </label>
        <input
          type="text"
          id="password"
          placeholder="비밀번호 입력"
          className="h-8 w-full border-b-2 border-gray300 px-1 text-paragraph-base outline-none focus:border-primary-color"
        />
        <button type="button" className="absolute bottom-2 right-0">
          <Eye />
        </button>
      </div>
      <div className="relative flex flex-col gap-2">
        <label
          htmlFor="confirm"
          className="noto px-1 text-label text-primary-color"
        >
          비밀번호 확인
        </label>
        <input
          type="text"
          id="confirm"
          placeholder="비밀번호 다시 입력"
          className="h-8 w-full border-b-2 border-gray300 px-1 text-paragraph-base outline-none focus:border-primary-color"
        />
        <button type="button" className="absolute bottom-2 right-0">
          <Eye />
        </button>
      </div>
    </section>
  );
};

export default LoginInfoSection;
