const navigationItems = [
  {
    id: 'main',
    index: true,
    path: '',
    text: '홈',
    lazy: () => import('@/pages/Home'),
  },
  {
    id: 'login',
    path: '/login',
    text: '로그인 화면',
    lazy: () => import('@/pages/Login'),
  },
  {
    id: 'register',
    path: '/register',
    text: '회원가입 화면',
    lazy: () => import('@/pages/Register'),
  },
  {
    id: 'group',
    path: '/group',
    text: '모임 화면',
    lazy: () => import('@/pages/GroupTest'),
  },
  {
    id: 'feed',
    path: '/feed',
    text: '피드 화면',
    lazy: () => import('@/pages/FeedTest'),
  },
  {
    id: 'mypage',
    path: '/mypage',
    text: '마이페이지 화면',
    lazy: () => import('@/pages/MyPage'),
  },
];

export default navigationItems;
