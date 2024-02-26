import { Link } from 'react-router-dom';
import { ReactComponent as Prev } from '@/assets/header/prev.svg';
import { ReactComponent as Eye } from '@/assets/register/eye.svg';

export const Component = () => {
  return (
    <section className="relative flex h-full flex-col items-stretch">
      <section className="absolute flex h-[75px] w-full items-end px-9 pb-2">
        <Link to="/login" className="absolute bottom-[13px] left-9">
          <Prev />
        </Link>
        <h2 className="w-full text-center font-Gong-Gothic-l text-heading-sm">
          회원가입
        </h2>
        <div className="absolute -bottom-4 left-0 h-[6px] w-full bg-gray300">
          <div className="h-full w-1/3 rounded-e-lg bg-primary-color"></div>
        </div>
      </section>
      <form className="flex flex-col gap-24 px-9">
        <section className="step-1 mt-40 flex flex-col gap-24">
          <h2 className="font-Gong-Gothic-l text-heading-lg">
            <p className="mb-1 h-7 w-7 rounded-full bg-primary-color text-center text-[16px] leading-8 text-white">
              1
            </p>
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
        {/* <section className="step-2 mt-40 flex flex-col gap-24">
          <h2 className="font-Gong-Gothic-l text-heading-lg">
            <p className="mb-1 h-7 w-7 rounded-full bg-primary-color text-center text-[16px] leading-8 text-white">
              2
            </p>
            휴대폰 번호를 알려주세요.
          </h2>
          <div className="relative flex flex-col gap-2">
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
          </div>
          <div className="relative flex flex-col gap-2">
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
          </div>
        </section> */}
        {/* <section className="step-2 mt-40 flex flex-col gap-12">
          <h2 className="font-Gong-Gothic-l text-heading-lg">
            <p className="mb-1 h-7 w-7 rounded-full bg-primary-color text-center text-[16px] leading-8 text-white">
              3
            </p>
            <p>사용할 아이디와</p> <p>비밀번호를 알려주세요.</p>
          </h2>
          <div className="relative flex flex-col gap-2">
            <label
              htmlFor="id"
              className="noto px-1 text-label text-primary-color"
            >
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
        </section> */}
        {/* <section className="step-2 mt-40 flex flex-col gap-8">
          <h2 className="mb-8 font-Gong-Gothic-l text-heading-lg">
            <p className="mb-1 h-7 w-7 rounded-full bg-primary-color text-center text-[16px] leading-8 text-white">
              4
            </p>
            <p>약관에 동의하시면</p> <p>회원가입이 완료됩니다.</p>
          </h2>
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
        </section> */}
        <section className="flex flex-col gap-4">
          <button
            type="button"
            className="noto h-14 w-full rounded-md border-2 border-primary-color text-label text-primary-color"
          >
            이전으로
          </button>
          <button
            type="button"
            className="noto h-14 w-full rounded-md border-2 border-primary-color text-label text-primary-color"
          >
            다음으로
          </button>
          {/* <button
            type="submit"
            className="noto h-14 w-full rounded-md border-2 border-primary-color text-label text-primary-color"
          >
            가입하기
          </button> */}
        </section>
      </form>
    </section>
  );
};

Component.displayName = 'Register';
