import { Route, Routes } from 'react-router-dom';
import { HomePage } from '../../pages/HomePage';
import { LoginPage } from '../../pages/LoginPage';
import { ProtectedRoute } from './ProtectedRoute';

import { RegistrationPage } from '../../pages/RegistrationPage';
import { ProfilePage } from '../../pages/ProfilePage';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="login" element={<LoginPage />}></Route>
      <Route path="registration" element={<RegistrationPage />}></Route>

      <Route
        path="profile"
        element={
          <ProtectedRoute>
            <ProfilePage />
          </ProtectedRoute>
        }
      ></Route>
    </Routes>
  );
};
