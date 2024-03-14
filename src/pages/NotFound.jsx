import SquareButton from '@/components/atom/common/SquareButton';
import QrCode from '@/pages/QrCode';

const NotFound = () => {
  return (
    <main className="flex h-screen justify-center bg-tertiary-color ">
      <h1 className="sr-only">한끼도시락</h1>
      <div className="lg:max-w-screen-lg flex">
        <section className="flex h-screen w-[594px] bg-gray100 tablet:hidden">
          <QrCode />
        </section>
        <section className="flex w-[430px] min-w-[372px] flex-row items-center justify-center bg-gray50 mobile:w-screen">
          <h2 className="sr-only">Not Found</h2>
          <div className="w-full px-9">
            <figure className="mb-[45%] mt-36">
              <img
                src="/assets/common/notFound.svg"
                alt="404"
                className="mx-auto"
              />
              <figcaption className="text-center">
                <em className="mb-[5%] mt-[13%] inline-block font-Gong-Gothic-l text-heading-lg not-italic text-content-color">
                  앗, 페이지를 찾을 수 없어요
                </em>
                <p className="mx-auto max-w-[308px] text-paragraph-lg text-gray600">
                  입력한 주소가 잘못되었거나, 사용이 일시 중단되어 요청한
                  페이지를 찾을 수 없습니다.
                  <br />
                  서비스 이용에 불편을 드려 죄송합니다.
                </p>
              </figcaption>
            </figure>
            <SquareButton type="link">처음으로</SquareButton>
          </div>
        </section>
      </div>
    </main>
  );
};

export default NotFound;
