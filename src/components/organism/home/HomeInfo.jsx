import ParticipateBox from '@/components/molecule/home/ParticipateBox';
import { useLoginUserInfo } from '@/hook';

const HomeInfo = () => {
  const userInfo = useLoginUserInfo();

  return (
    <section className="h-fit w-full bg-white px-9 pb-[125px] pt-[118px] mobile:px-4">
      <section className="flex h-[108px] flex-col gap-1.5 bg-[url('/src/assets/home/bubble.svg')] bg-cover bg-center bg-no-repeat px-5 py-4">
        <span className="noto text-paragraph-lg text-white">
          이번 달, {userInfo.nickname}님은
        </span>
        <div className="flex gap-2">
          <img
            src="/assets/common/blackheart-true.svg"
            alt="좋아요 아이콘"
            className="size-6"
          />
          <p className="font-Gong-Gothic-l text-heading-sm text-white">
            0개의 좋아요를 받았어요
          </p>
        </div>
      </section>
      <ParticipateBox />
    </section>
  );
};

export default HomeInfo;
