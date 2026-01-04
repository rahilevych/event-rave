import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthStore } from '../../features/auth/model/AuthStore';

interface ProtectedRoute {
  children: ReactNode;
}
export const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const isAuth = useAuthStore((state) => state.isAuth);
  const token = localStorage.getItem('token');

  return isAuth && token ? <>{children}</> : <Navigate to="/login" replace />;
};
