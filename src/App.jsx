import { HelmetProvider } from 'react-helmet-async';
import reactLogo from './assets/react.svg';
import Logo from '/logo.svg';
import router from '@/routes';
import { RouterProvider } from 'react-router-dom';

function App() {
  return (
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  );
}

export default App;
