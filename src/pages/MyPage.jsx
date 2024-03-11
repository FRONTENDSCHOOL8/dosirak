import MainNavBar from '@/components/molecule/common/MainNavBar';
import MyPageHeader from '@/components/organism/mypage/MyPageHeader';
import MyPageSummary from '@/components/organism/mypage/MyPageSummary';
import MyPageLinkSection from '@/components/molecule/mypage/MyPageLinkSection';
import { pb } from '@/util';
import { useLoginUserInfo } from '@/hook';
import useUserSessionStore from '@/store/useUserSessionStore';
import useUserPersistStore from '@/store/useUserPersistStore';
import { useNavigate } from 'react-router-dom';

const QNA_LINK_ITEM = [
  {
    path: '',
    name: '공지사항',
  },
  {
    path: '',
    name: '자주 하는 질문',
  },
];

const MY_LINK_ITEM = [
  {
    path: '',
    name: '프로필 변경',
  },
  {
    path: '',
    name: '비밀번호 변경',
  },
];

export const Component = () => {
  const userInfo = useLoginUserInfo();
  const navigate = useNavigate();
  const { setLoginUser: setSessionId } = useUserSessionStore((state) => state);
  const { setLoginUser: setRememberId } = useUserPersistStore((state) => state);

  const handleLogout = () => {
    if (confirm('정말로 로그아웃 하시겠어요?')) {
      alert('로그아웃 되었어요.\n로그인 화면으로 돌아갈게요.');
      navigate('/login');

      if (userInfo.storage === 'session') {
        setSessionId({});
      } else {
        setRememberId({});
      }

      pb.authStore.clear();
    }
  };

  return (
    <>
      <section className="relative flex h-fit min-h-screen flex-col gap-3 bg-gray100 pb-32">
        <MyPageHeader />
        <MyPageSummary />
        <MyPageLinkSection linkItem={QNA_LINK_ITEM} />
        <MyPageLinkSection linkItem={MY_LINK_ITEM}>
          <div className="px-9 py-5">
            <button
              onClick={handleLogout}
              type="button"
              className="flex w-full items-center justify-between"
            >
              로그아웃
              <img src="/assets/mypage/arrow.svg" alt="링크 이동" />
            </button>
          </div>
        </MyPageLinkSection>
      </section>
      <MainNavBar />
    </>
  );
};

Component.displayName = 'mypage';
