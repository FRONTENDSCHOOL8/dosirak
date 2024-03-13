import MainNavBar from '@/components/molecule/common/MainNavBar';
import AlertSetting from '@/components/molecule/mypage/AlertSetting';
import EtcSetting from '@/components/molecule/mypage/EtcSetting';
import SettingsHeader from '@/components/organism/mypage/SettingsHeader';
import { useLoginUserInfo } from '@/hook';
import { pb } from '@/util';
import { useNavigate } from 'react-router-dom';

const fetchLeave = async (userId) => {
  const result = await pb.collection('users').update(userId, { status: 4 });

  return result;
};

export const Component = () => {
  const userInfo = useLoginUserInfo();
  const navigate = useNavigate();

  const handleLeave = async () => {
    if (
      confirm('정말로 탈퇴하시겠어요?\n피드 글은 자동으로 지워지지 않아요!')
    ) {
      await fetchLeave(userInfo.id);

      alert('탈퇴 처리가 완료되었어요.\n다시 만날 날을 기대하고 있을게요.');
      navigate('/login', { replace: true });
    }
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
