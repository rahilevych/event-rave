import { Route, Routes } from 'react-router-dom';
import { HomePage } from '../../pages/HomePage';

export const AppRoutes = () => {
  <Routes>
    <Route path="/" element={<HomePage />}></Route>
  </Routes>;
};
