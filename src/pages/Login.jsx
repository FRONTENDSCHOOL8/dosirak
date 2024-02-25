import { Link } from 'react-router-dom';
import { ReactComponent as Naver } from '@/assets/login/naver.svg';
import { ReactComponent as Kakao } from '@/assets/login/kakao.svg';
import { ReactComponent as Insta } from '@/assets/login/insta.svg';

const Login = () => {
  return (
    <section className="flex h-screen items-center">
      <h2 className="sr-only">로그인</h2>
      <div className="mx-9 flex w-full flex-col gap-[60px]">
        <section className="">
          <h2 className="font-Gong-Gothic-l text-login-lg text-4xl">
            <p>오늘의</p>
            <p>
              하루 <span className="font-Gong-Gothic-m">한 끼</span>,
            </p>
            <p>
              <span className="font-Gong-Gothic-m">도시락</span> 어때요?
            </p>
          </h2>
        </section>
        <section className="w-full">
          <h2 className="sr-only">로그인 폼</h2>
          <form className="flex w-full flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="id" className="noto text-label">
                아이디
              </label>
              <input
                type="email"
                id="id"
                placeholder="아이디를 입력해 주세요"
                className="border-gray300 focus:border-primary-color text-paragraph-base h-11 w-full rounded-[5px] border-2 px-3 outline-none"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="password" className="noto text-label">
                비밀번호
              </label>
              <input
                type="password"
                id="password"
                placeholder="비밀번호를 입력해 주세요"
                className="border-gray300 focus:border-primary-color text-paragraph-base h-11 w-full rounded-[5px] border-2 px-3 outline-none"
              />
            </div>
            <button className="bg-primary-color text-label noto mt-3 h-12 rounded-[5px] text-white">
              로그인 하기
            </button>
          </form>
        </section>
        <section>
          <h2 className="sr-only">기타 로그인 기능 영역</h2>
          <div className="flex flex-col items-center">
            <span className="noto text-paragraph-base">
              SNS 계정으로 간편 로그인하기
            </span>
            <div className="mt-4 flex gap-3">
              <button>
                <Kakao />
              </button>
              <button>
                <Naver />
              </button>
              <button>
                <Insta />
              </button>
            </div>
            <table className="noto text-paragraph-base mt-6">
              <tbody>
                <tr>
                  <td className="border-r px-4">
                    <Link className="">아이디 찾기</Link>
                  </td>
                  <td className="border-r px-4">
                    <Link className="">비밀번호 찾기</Link>
                  </td>
                  <td className="px-4">
                    <Link className="">회원가입 하기</Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Login;
