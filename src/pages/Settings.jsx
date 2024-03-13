import MainNavBar from '@/components/molecule/common/MainNavBar';
import AlertSetting from '@/components/molecule/mypage/AlertSetting';
import EtcSetting from '@/components/molecule/mypage/EtcSetting';
import SettingsHeader from '@/components/organism/mypage/SettingsHeader';

export const Component = () => {
  const handleLeave = () => {
    console.log('bye');
  };

  return (
    <>
      <section className="relative flex h-fit min-h-screen flex-col gap-3 bg-white pb-16">
        <SettingsHeader />
        <section className="noto pt-20">
          <AlertSetting />
          <EtcSetting />
          <button
            type="button"
            className="mx-9 mt-8 text-paragraph-lg text-secondary-color"
            onClick={handleLeave}
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
