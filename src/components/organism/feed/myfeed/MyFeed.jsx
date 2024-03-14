import MainNavBar from '@/components/molecule/common/MainNavBar';
import NavBar from '@/components/molecule/navbar/NavBar';
import { ReactComponent as Spoon } from '@/assets/feed/spoon.svg';
import { useLoginUserInfo } from '@/hook';
import MyFeedProfile from '@/components/molecule/myfeed/MyFeedProfile';
import MyPostNavBar from '@/components/molecule/myfeed/MyPostNavBar';
import MyPostGrid from '@/components/molecule/myfeed/MyPostGrid';
import { feedPath } from '@/pages/Feed';

const MyFeed = ({ feed }) => {
  const userInfo = useLoginUserInfo();

  return (
    <>
      <section className="flex h-fit min-h-screen flex-col">
        <header>
          <NavBar type="feed" path={feedPath}>
            피드
          </NavBar>
        </header>
        <main className="flex h-fit flex-col pt-[132px]">
          <MyFeedProfile />
          <section className="noto relative flex w-full items-center justify-center px-12  ">
            <p className="w-full rounded-lg bg-primary-color p-4 text-center text-white">
              도시락에 내가 좋아하는 것들을 가득 담아..
            </p>
            <span className="absolute -bottom-3 right-16 h-[27px] w-[18px]">
              <Spoon />
            </span>
          </section>
          <div>
            <MyPostNavBar />
          </div>
          <MyPostGrid feed={feed} />
        </main>
      </section>
      <MainNavBar />
    </>
  );
};

export default MyFeed;
