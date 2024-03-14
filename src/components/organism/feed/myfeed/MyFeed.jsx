import MainNavBar from '@/components/molecule/common/MainNavBar';
import NavBar from '@/components/molecule/navbar/NavBar';
import { ReactComponent as Spoon } from '@/assets/feed/spoon.svg';
import { useLoginUserInfo } from '@/hook';
import MyFeedProfile from '@/components/molecule/myfeed/MyFeedProfile';
import MyPostNavBar from '@/components/molecule/myfeed/MyPostNavBar';
import MyPostGrid from '@/components/molecule/myfeed/MyPostGrid';

const feedPath = [
  { path: '/feed/popular', children: '인기' },
  { path: '/feed/recommend', children: '추천' },
  { path: '/feed/following', children: '팔로잉' },
  { path: '/feed/myfeed', children: '내 피드' },
];

const MyFeed = ({ feed }) => {
  const userInfo = useLoginUserInfo();

  return (
    <>
      <section className="flex h-fit min-h-screen flex-col">
        <header>
          <NavBar path={feedPath}>피드</NavBar>
        </header>
        <section className="flex h-fit pt-[132px]">
          <main className="mx-9 justify-center">
            <MyFeedProfile />
            <section className=" relative mt-4 flex h-[60px] w-[358px] items-center justify-center rounded-xl bg-primary-color">
              <p className="text-center text-white">
                도시락에 내가 좋아하는 것들을 가득 담아..
              </p>
              <span className="absolute -bottom-3 right-6 h-[27px] w-[18px]">
                <Spoon />
              </span>
            </section>
            <div>
              <MyPostNavBar />
            </div>
            <MyPostGrid feed={feed} />
          </main>
        </section>
      </section>
      <MainNavBar />
    </>
  );
};

export default MyFeed;
