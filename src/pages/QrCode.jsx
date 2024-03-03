import Dot from "@/components/atom/common/Dot";

const QrCode = () => {
  return (
    <>
      <h2 className="sr-only">한 끼 도시락</h2>
      <div className="relative w-[465px] h-[449px] ml-[77px] mr-[52px] self-center">
        <figure>
          <figcaption className="text-label">즐거운 <span className="text-primary-color">한 끼</span>를 나누는 <Dot bgColor="bg-primary-color"/>도<Dot bgColor="bg-secondary-color"/>시<Dot bgColor="bg-tertiary-color"/>락 커뮤니티</figcaption>
          <img src="/src/assets/common/logo.svg" alt="한끼도시락 로고" className="w-[106px] mt-3" />
        </figure>
        <figure className="absolute w-[142px] bottom-0">
          <figcaption className="mb-1 h-[49px] bg-[url('/src/assets/desktop/qrBubble.png')] bg-cover text-paragraph-sm pt-[10px] pl-8">
            한끼도시락을<br /><span className="font-semibold">핸드폰</span>에서 만나보세요!
          </figcaption>
          <img src="/src/assets/desktop/qr.svg" alt="한끼도시락 qr" />
        </figure>
        <img src="/src/assets/desktop/mockup.png" alt="피드페이지 내 피드 목업 이미지" className="w-[301px] absolute right-0 bottom-0" />
      </div>
    </>
  )
};

export default QrCode;
