import MainNavBar from '@/components/molecule/common/MainNavBar';
import NavBar from '@/components/molecule/navbar/NavBar';
import { ReactComponent as Pen } from '@/assets/feed/pencil.svg';
import { ReactComponent as Line } from '@/assets/feed/line.svg';
import { ReactComponent as Spoon } from '@/assets/feed/spoon.svg';
import { ReactComponent as Profile } from '@/assets/group/person.svg';

const feedPath = [
  { path: '/feed/popular', children: '인기' },
  { path: '/feed/recommend', children: '추천' },
  { path: '/feed/following', children: '팔로잉' },
  { path: '/feed/myfeed', children: '내 피드' },
];

const myfeedPath = [
  { path: '/feed/myfeed/post', children: '게시글' },
  { path: '/feed/myfeed/saveTemp', children: '임시저장' },
  { path: '/feed/myfeed/private', children: '비공개' },
];

const MyFeed = ({ feed }) => {
  console.log(feed);
  return (
    <>
      <section className="flex h-fit min-h-screen flex-col">
        <header>
          <NavBar path={feedPath}>피드</NavBar>
        </header>
        <section className="flex h-fit pt-[132px]">
          <main>
            <section class="w-358 h-176 relative bg-gray-50">
              <Profile />
              <Pen />
              <div className="mt-211 me-166 h-[40px] w-[195px] space-x-4">
                <span className="noto text-xs text-gray-700">게시글</span>
                <span className="noto text-xs text-gray-700">팔로워</span>
                <span className="noto text-xs text-gray-700">팔로잉</span>
              </div>
              <div className="flex h-[60px] w-[358px] items-center justify-center bg-primary-color">
                <p className="relative text-center text-white">
                  도시락에 내가 좋아하는 것들을 가득 담아..
                </p>
                <Spoon />
              </div>
            </section>
            <section>
              {/* <NavBar path={myfeedPath}>게시글</NavBar>
              <NavBar path={myfeedPath}>임시저장</NavBar>
              <NavBar path={myfeedPath}>비공개</NavBar> */}
            </section>
          </main>
        </section>
      </section>
      <MainNavBar />
    </>
  );
};

export default MyFeed;
