import { Home } from '@/pages/Home';
import Login from '@/pages/Login';

const navigationItems = [
  {
    id: 'main',
    index: true,
    path: '',
    text: '홈',
    element: <Home />,
    // lazy: () => import('@/pages/Home'),
  },
  {
    id: 'login',
    path: '/login',
    text: '로그인 화면',
    element: <Login />,
    // lazy: () => import('@/pages/Login'),
  },
];

export default navigationItems;
