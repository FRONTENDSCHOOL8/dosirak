import MainNavBar from '@/components/molecule/common/MainNavBar';
import SettingsHeader from '@/components/organism/mypage/SettingsHeader';

export const Component = () => {
  return (
    <>
      <section className="relative flex h-fit min-h-screen flex-col gap-3 bg-white pb-16">
        <SettingsHeader />
        <section className="noto pt-20">
          <section className="px-9 pt-11">
            <div className="flex flex-col gap-4 border-b-[1px] pb-8">
              <h2 className="text-paragraph-base text-gray600">알림</h2>
              <div className="flex justify-between text-paragraph-lg">
                <label htmlFor="">알림 수신 설정</label>
                <input type="checkbox" />
              </div>
              <div className="flex justify-between text-paragraph-lg">
                <label htmlFor="">방해금지 시간 설정</label>
                <input type="checkbox" />
              </div>
            </div>
          </section>
          <section className="px-9 pt-8">
            <div className="flex flex-col gap-4 border-b-[1px] pb-8">
              <h2 className="text-paragraph-base text-gray600">기타</h2>
              <div className="flex justify-between text-paragraph-lg">
                <span>언어</span>
                <span className="text-secondary-color">한국어</span>
              </div>
              <div className="flex justify-between text-paragraph-lg">
                <button type="button">캐시 데이터 삭제하기</button>
              </div>
              <div className="flex justify-between text-paragraph-lg">
                <span>현재 버전</span>
                <span className="text-secondary-color">24.0.6.1</span>
              </div>
            </div>
          </section>
          <button
            type="button"
            className="mx-9 mt-8 text-paragraph-lg text-secondary-color"
          >
            탈퇴하기
          </button>
        </section>
      </section>
      <MainNavBar />
    </>
  );
};

Component.displayName = 'Settings';
