import MainNavBar from '@/components/molecule/common/MainNavBar';
import { ReactComponent as Alarm } from '@/assets/common/alarm.svg';
import { ReactComponent as Setting } from '@/assets/common/setting.svg';
import { Link } from 'react-router-dom';
import { useLoginUserInfo } from '@/hook';

export const Component = () => {
  const userInfo = useLoginUserInfo();

  return (
    <>
      <section className="relative flex h-fit min-h-screen flex-col">
        <header className="fixed top-0 z-10 w-[430px] bg-white shadow-[0_4px_4px_0_rgba(204,204,204,0.25)] mobile:w-full">
          <div className="relative flex h-20 items-end justify-between px-9 pb-[18px]">
            <span className="font-Gong-Gothic-m text-heading-lg">
              마이페이지
            </span>
            <div className="flex h-9 items-center gap-4">
              <button type="button">
                <Alarm />
              </button>
              <Link>
                <Setting />
              </Link>
            </div>
          </div>
        </header>
        <section className="h-fit pt-[132px]">
          <section className="flex h-[330px] flex-col items-center gap-4">
            <figure className="relative size-28">
              <img
                src={userInfo.thumbnail}
                className="size-full rounded-full "
                alt=""
              />
              <figcaption className="absolute bottom-0 right-0 size-8">
                <button type="button" className="size-full">
                  <img src="/assets/common/modify.svg" alt="" />
                </button>
              </figcaption>
            </figure>
            <strong className="font-Gong-Gothic-l text-heading-sm">
              {userInfo.nickname}
            </strong>
          </section>
          <section>
            <Link>스크랩</Link>
            <Link>좋아요</Link>
          </section>
        </section>
      </section>
      <MainNavBar />
    </>
  );
};

Component.displayName = 'mypage';
