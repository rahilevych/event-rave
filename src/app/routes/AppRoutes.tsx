import { Route, Routes } from 'react-router-dom';
import { HomePage } from '../../pages/HomePage';
import { LoginPage } from '../../pages/LoginPage';
import { ProtectedRoute } from './ProtectedRoute';
import { Profile } from '../../pages/Profile';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/login" element={<LoginPage />}></Route>
      <Route
        path="profile"
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }
      ></Route>
    </Routes>
  );
};
