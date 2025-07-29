import { ReactNode } from 'react';
import { useAuth } from '../../shared/hooks/useAuth';
import { Navigate } from 'react-router-dom';

interface ProtectedRoutes {
  children: ReactNode;
}
export const ProtectedRoute = ({ children }: ProtectedRoutes) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? <>{children} </> : <Navigate to="login" />;
};
