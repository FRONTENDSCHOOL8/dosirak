import MainNavBar from '@/components/molecule/common/MainNavBar';
import useFeedStore from '@/store/useFeedStore';

const NotFound = () => {
  return (
    <main className="flex h-screen justify-center bg-tertiary-color ">
      <div className="lg:max-w-screen-lg flex">
        <section className="w-[594px] bg-slate-600 tablet:hidden">
          <h2 className="sr-only">한 끼 도시락</h2>
        </section>
        <div className="w-[430px] min-w-[372px] bg-white pb-[95px] mobile:w-screen">
          페이지를 찾을 수 없습니다!
          <MainNavBar />
        </div>
      </div>
    </main>
  );
};

export default NotFound;
