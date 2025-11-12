import '../shared/styles/global.css';
import { useEffect } from 'react';

import { AppRoutes } from './routes/AppRoutes';
import { useAuth } from '../features/auth/hooks/useAuth';

function App() {
  let refreshCalled = false;
  const { checkAuth } = useAuth();
  useEffect(() => {
    if (!refreshCalled) {
      refreshCalled = true;
      checkAuth.mutate();
    }
  }, []);

  return <AppRoutes />;
}

export default App;
