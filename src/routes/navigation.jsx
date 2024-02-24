import { Home } from '@/pages/Home';

const navigationItems = [
  {
    id: 'main',
    index: true,
    path: '',
    text: '홈',
    element: <Home />,
    // lazy: () => import('@/pages/Home'),
  },
];

export default navigationItems;
