import MainNavBar from '@/components/molecule/common/MainNavBar';
import MyPageHeader from '@/components/organism/mypage/MyPageHeader';
import MyPageSummary from '@/components/organism/mypage/MyPageSummary';
import MyPageLinkSection from '@/components/molecule/mypage/MyPageLinkSection';

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
  {
    path: '',
    name: '로그아웃',
  },
];

export const Component = () => {
  return (
    <>
      <section className="relative flex h-fit min-h-screen flex-col gap-3 bg-gray100 pb-32">
        <MyPageHeader />
        <MyPageSummary />
        <MyPageLinkSection linkItem={QNA_LINK_ITEM} />
        <MyPageLinkSection linkItem={MY_LINK_ITEM} />
      </section>
      <MainNavBar />
    </>
  );
};

Component.displayName = 'mypage';
