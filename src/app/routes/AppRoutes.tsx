import { Route, Routes } from 'react-router-dom';
import { HomePage } from '../../pages/HomePage';
import { LoginPage } from '../../pages/LoginPage';
import { ProtectedRoute } from './ProtectedRoute';

import { RegistrationPage } from '../../pages/RegistrationPage';
import { ProfilePage } from '../../pages/ProfilePage';
import { EventsPage } from '../../pages/EventsPage';
import { EventPage } from '../../pages/EventPage';
import { FavoritesPage } from '../../pages/FavoritesPage';
import { AllSearchResultsPage } from '../../pages/AllSearchResultsPage';
import { OAuthSuccess } from '../../pages/OAuthSuccess';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="login" element={<LoginPage />}></Route>
      <Route path="registration" element={<RegistrationPage />}></Route>
      <Route path="search" element={<AllSearchResultsPage />}></Route>
      <Route path="events/:categoryId" element={<EventsPage />}></Route>
      <Route path="oauth/success" element={<OAuthSuccess />}></Route>

      <Route path="event/:id" element={<EventPage />}></Route>
      <Route
        path="profile"
        element={
          <ProtectedRoute>
            <ProfilePage />
          </ProtectedRoute>
        }
      ></Route>
      <Route
        path="favorites"
        element={
          <ProtectedRoute>
            <FavoritesPage />
          </ProtectedRoute>
        }
      ></Route>
    </Routes>
  );
};
