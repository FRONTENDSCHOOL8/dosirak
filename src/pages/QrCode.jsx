import Dot from '@/components/atom/common/Dot';

const QrCode = () => {
  return (
    <>
      <h2 className="sr-only">한 끼 도시락</h2>
      <div className="relative ml-[77px] mr-[52px] h-[449px] w-[465px] self-center">
        <figure>
          <figcaption className="noto text-label">
            즐거운 <span className="text-primary-color">한 끼</span>를 나누는{' '}
            <Dot bgColor="bg-primary-color" />도
            <Dot bgColor="bg-secondary-color" />시
            <Dot bgColor="bg-tertiary-color" />락 커뮤니티
          </figcaption>
          <img
            src="/assets/common/logo.svg"
            alt="한끼도시락 로고"
            className="mt-3 w-[106px]"
          />
        </figure>
        <figure className="absolute bottom-0 w-[142px]">
          <figcaption className="noto mb-1 h-[49px] bg-[url('/assets/desktop/qrBubble.png')] bg-cover pl-8 pt-[10px] text-paragraph-sm">
            한끼도시락을
            <br />
            <span className="font-semibold">핸드폰</span>에서 만나보세요!
          </figcaption>
          <img src="/assets/desktop/qr.svg" alt="한끼도시락 qr" />
        </figure>
        <img
          src="/assets/desktop/mockup.png"
          alt="피드페이지 내 피드 목업 이미지"
          className="absolute bottom-0 right-0 w-[301px]"
        />
      </div>
    </>
  );
};

export default QrCode;
