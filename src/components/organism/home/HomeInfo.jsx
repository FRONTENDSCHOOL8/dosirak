import ParticipateBox from '@/components/molecule/home/ParticipateBox';
import { useLoginUserInfo } from '@/hook';

const HomeInfo = () => {
  const userInfo = useLoginUserInfo();

  return (
    <section className="mx-9 mt-[118px] h-[250px] w-[358px] bg-white">
      <section className="flex h-[108px] w-full flex-col bg-[url('/src/assets/home/bubble.svg')]">
        <span className="mb-2 ms-[22px] mt-[18px] text-label text-white">
          이번 달, {userInfo.nickname}님은
        </span>
        <div className="ms-[22px] flex gap-1">
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
