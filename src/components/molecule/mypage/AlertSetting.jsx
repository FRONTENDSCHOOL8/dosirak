import SettingCheckBox from '@/components/atom/mypage/SettingCheckBox';

const AlertSetting = () => {
  return (
    <section className="px-9 pt-11">
      <div className="flex flex-col gap-4 border-b-[1px] pb-8">
        <h2 className="text-paragraph-base text-gray600">알림</h2>
        <SettingCheckBox name="alert">알림 수신 설정</SettingCheckBox>
        <SettingCheckBox name="disturb">방해 금지 설정</SettingCheckBox>
      </div>
    </section>
  );
};

export default AlertSetting;
