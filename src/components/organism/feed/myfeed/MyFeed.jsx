import MainNavBar from '@/components/molecule/common/MainNavBar';
import NavBar from '@/components/molecule/navbar/NavBar';
import { ReactComponent as Pen } from '@/assets/common/modify-profile.svg';
import { ReactComponent as Spoon } from '@/assets/feed/spoon.svg';
import useCommonStore from '@/store/useCommonStore';
import { NavLink } from 'react-router-dom';
import { useLoginUserInfo } from '@/hook';

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
  const userInfo = useLoginUserInfo();

  return (
    <>
      <section className="flex h-fit min-h-screen flex-col">
        <header>
          <NavBar path={feedPath}>피드</NavBar>
        </header>
        <section className="flex h-fit pt-[132px]">
          <main className="mx-9 justify-center">
            <div className="flex gap-[54px]">
              <div className="">
                <figure className="relative w-[73px]">
                  <img
                    src={userInfo.thumbnail}
                    alt=""
                    className="size-[73px] rounded-full border-2"
                  />
                  <figcaption className="absolute -bottom-1 right-0">
                    <button>
                      <Pen />
                    </button>
                  </figcaption>
                </figure>
                <span className="paragraph-lg h-[24px] w-[300px] text-nowrap">
                  {userInfo.nickname}
                </span>
              </div>
              <div className=" ms-[20px] mt-[22px] flex space-x-6">
                <p className="noto flex flex-col items-center text-label text-paragraph-base text-gray700">
                  <strong>8</strong>
                  <span className="w-10 text-center">게시글</span>
                </p>
                <p className="noto flex flex-col items-center text-label text-paragraph-base text-gray700">
                  <strong>48</strong>
                  <span className="w-10 text-center">팔로워</span>
                </p>
                <p className="noto flex flex-col items-center text-label text-paragraph-base text-gray700">
                  <strong>52</strong>
                  <span className="w-10 text-center">팔로잉</span>
                </p>
              </div>
            </div>
            <section className=" relative mt-4 flex h-[60px] w-[358px] items-center justify-center rounded-xl bg-primary-color">
              <p className="text-center text-white">
                도시락에 내가 좋아하는 것들을 가득 담아..
              </p>
              <span className="absolute -bottom-3 right-6 h-[27px] w-[18px]">
                <Spoon />
              </span>
            </section>
            <div className="">
              <ul className="mt-[38px] flex w-full text-center">
                <li className="noto flex-grow border-b-2 border-b-primary-color text-paragraph-lg text-gray500">
                  <NavLink to={'/'} className="">
                    게시글
                  </NavLink>
                </li>
                <li className="noto flex-grow border-b-2 border-b-secondary-color text-paragraph-lg text-gray500">
                  <NavLink to={'/'} className="">
                    임시저장
                  </NavLink>
                </li>
                <li className="noto flex-grow border-b-2 border-b-tertiary-color text-paragraph-lg text-gray500">
                  <NavLink to={'/'} className="">
                    비공개
                  </NavLink>
                </li>
              </ul>
            </div>
            <ul className="grid grid-cols-3 pb-[125px]">
              {feed.map((item) => (
                <li className="size-[118px]">
                  <img src={item.images[0]} alt="" />
                </li>
              ))}
            </ul>
          </main>
        </section>
      </section>
      <MainNavBar />
    </>
  );
};

export default MyFeed;
