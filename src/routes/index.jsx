import { createBrowserRouter } from 'react-router-dom';

// Layout
import Layout from '@/pages/Layout';

// NotFound(404)
import NotFound from '@/pages/NotFound';

// Navigation
import navigationItems from './navigation';

// route config
const routes = [
  {
    path: '/',
    element: <Layout />,
    errorElement: <NotFound />,
    children: navigationItems,
  },
];

const router = createBrowserRouter(routes);

export default router;
