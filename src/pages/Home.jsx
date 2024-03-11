import { useLoginUserInfo } from '@/hook';
import { ReactComponent as Bell } from '@/assets/common/alarm.svg';
import MainNavBar from '@/components/molecule/common/MainNavBar';
import { Link } from 'react-router-dom';

export const Component = () => {
  const userInfo = useLoginUserInfo();

  return (
    <>
      <header className="fixed top-0 z-10 w-[430px] bg-white shadow-[0_4px_4px_0_rgba(204,204,204,0.25)] mobile:w-screen">
        <div className="relative flex h-20 items-end justify-between px-9 pb-[18px]">
          <ul className="">
            <li>
              <Link>
                <img
                  src="/assets/common/logo.svg"
                  alt=""
                  className="h-[40px] w-[74px]"
                />
              </Link>
            </li>
          </ul>
          <ul className="flex gap-[22px]">
            <li className="">
              <Link to="/">
                <Bell />
              </Link>
            </li>
            <li>
              <Link to="/">
                <img src="/assets/common/bookmark-false.svg" alt="북마크" />
              </Link>
            </li>
          </ul>
        </div>
      </header>
      <main className="">
        <section className="flex h-[262px] w-[430px] rounded-b-[40px] bg-primary-color">
          <span className="text-paragraph-lg text-white">
            {userInfo.nickname}님 안녕하세요!
          </span>
          <strong className="text-paragraph-lg text-white">
            오늘은 이런 도시락 어때요?
          </strong>
        </section>
      </main>
      <MainNavBar />
    </>
  );
};

Component.displayName = 'Home';
