import { useLoginUserInfo } from '@/hook';
import { Link } from 'react-router-dom';

const MyPageSummary = () => {
  const userInfo = useLoginUserInfo();

  return (
    <section className="h-fit pt-20">
      <section className="flex h-[350px] flex-col items-center gap-4 bg-white pt-16">
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
        <div className="noto flex rounded-lg bg-primary-color text-label text-gray50">
          <Link className="relative px-9 py-5 after:absolute after:right-0 after:top-1/2 after:h-2/3 after:-translate-y-1/2 after:border-r-[1px] after:border-gray600 after:content-['']">
            <figure className="flex gap-2">
              <img src="/assets/common/bookmark.svg" alt="" />
              <figcaption>스크랩 75</figcaption>
            </figure>
          </Link>
          <Link className="px-9 py-5">
            <figure className="flex gap-2">
              <img src="/assets/common/whiteheart-false.svg" alt="" />
              <figcaption>좋아요 32</figcaption>
            </figure>
          </Link>
        </div>
      </section>
    </section>
  );
};

export default MyPageSummary;
