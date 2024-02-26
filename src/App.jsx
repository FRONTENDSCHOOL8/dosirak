import { HelmetProvider } from 'react-helmet-async';
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
