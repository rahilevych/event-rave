import { useAuthStore } from '../features/auth/model/AuthStore';
import '../shared/styles/global.css';
import { useEffect } from 'react';

import { AppRoutes } from './routes/AppRoutes';

function App() {
  const checkAuth = useAuthStore((state) => state.checkAuth);
  let refreshCalled = false;

  useEffect(() => {
    if (!refreshCalled) {
      refreshCalled = true;
      checkAuth();
    }
  }, []);

  return <AppRoutes />;
}

export default App;
