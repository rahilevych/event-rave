import '../shared/styles/global.css';
import { useEffect } from 'react';
import { AppRoutes } from './routes/AppRoutes';
import { useAuthStore } from '../features/auth/model/AuthStore';
import { Toaster } from 'react-hot-toast';

function App() {
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      useAuthStore.getState().setIsAuth(true);
    }
  }, []);

  return (
    <>
      {' '}
      <AppRoutes />
      <Toaster />
    </>
  );
}

export default App;
