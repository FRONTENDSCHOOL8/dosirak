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
    // element: <Login />,
    lazy: () => import('@/pages/Login'),
  },
  {
    id: 'register',
    path: '/register',
    text: '회원가입 화면',
    // element: <Register />,
    lazy: () => import('@/pages/Register'),
  },
];

export default navigationItems;
