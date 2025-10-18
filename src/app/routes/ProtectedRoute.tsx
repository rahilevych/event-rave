import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

interface ProtectedRoute {
  children: ReactNode;
}
export const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const token = localStorage.getItem('token');
  return token ? <>{children}</> : <Navigate to="/login" replace />;
};
