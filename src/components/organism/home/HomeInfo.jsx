import ParticipateBox from '@/components/molecule/home/ParticipateBox';
import { useLoginUserInfo } from '@/hook';

const HomeInfo = () => {
  const userInfo = useLoginUserInfo();

  return (
    <section className="h-fit w-full bg-white px-9 pb-[125px] pt-[118px] mobile:px-4">
      <section className="noto flex h-[108px] flex-col gap-2 bg-[url('/src/assets/home/bubble.svg')] bg-cover bg-center bg-no-repeat px-5 py-3">
        <span className="text-label text-white">
          이번 달, {userInfo.nickname}님은
        </span>
        <div className="flex gap-2">
          <img
            src="/assets/common/blackheart-true.svg"
            alt=""
            className="size-[24px]"
          />
          <span className="font-Gong-Gothic-l text-heading-sm text-white">
            48개의 좋아요를 받았어요
          </span>
        </div>
      </section>
      <ParticipateBox />
    </section>
  );
};

export default HomeInfo;
