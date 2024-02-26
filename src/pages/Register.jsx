import { Link } from 'react-router-dom';
import { ReactComponent as Prev } from '@/assets/header/prev.svg';

export const Component = () => {
  return (
    <section className="relative flex h-full flex-col items-stretch">
      <section className="absolute flex h-[75px] w-full items-end px-9 pb-2">
        <Link to="/login" className="absolute bottom-[13px] left-9">
          <Prev />
        </Link>
        <h2 className="font-Gong-Gothic-l text-heading-sm w-full text-center">
          회원가입
        </h2>
        <div className="bg-gray300 absolute -bottom-4 left-0 h-[6px] w-full">
          <div className="bg-primary-color h-full w-1/3 rounded-e-lg"></div>
        </div>
      </section>
      {/* <section className="step-1 mt-40 flex flex-col gap-24 px-9">
        <h2 className="font-Gong-Gothic-l text-heading-lg">
          <p className="bg-primary-color mb-1 h-7 w-7 rounded-full text-center text-[16px] leading-8 text-white">
            1
          </p>
          이름을 알려주세요.
        </h2>
        <div className="flex flex-col gap-2">
          <label
            htmlFor="name"
            className="noto text-label text-primary-color px-1"
          >
            이름
          </label>
          <input
            type="text"
            id="name"
            placeholder="이름 입력"
            className="border-gray300 focus:border-primary-color text-paragraph-base h-8 w-full border-b-2 px-1 outline-none"
          />
        </div>
      </section> */}
      <section className="step-2 mt-40 flex flex-col gap-24 px-9">
        <h2 className="font-Gong-Gothic-l text-heading-lg">
          <p className="bg-primary-color mb-1 h-7 w-7 rounded-full text-center text-[16px] leading-8 text-white">
            2
          </p>
          휴대폰 번호를 알려주세요.
        </h2>
        <div className="flex flex-col gap-2">
          <label
            htmlFor="name"
            className="noto text-label text-primary-color px-1"
          >
            휴대폰 번호
          </label>
          <input
            type="text"
            id="name"
            placeholder="휴대폰 번호 입력"
            className="border-gray300 focus:border-primary-color text-paragraph-base h-8 w-full border-b-2 px-1 outline-none"
          />
        </div>
      </section>
    </section>
  );
};

Component.displayName = 'Register';
