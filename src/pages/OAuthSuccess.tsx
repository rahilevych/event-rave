import { Footer } from 'react-day-picker';
import { Header } from '../layouts/header/Header';
import styles from '../features/favorites/styles/FavoritesPage.module.css';
import { Loader } from '../shared/ui/loader/Loader';
import { useEffect } from 'react';
import { refreshAccessToken } from '../shared/lib/refreshAccessToken';
import { useAuthStore } from '../features/auth/model/AuthStore';
import toast from 'react-hot-toast';

export const OAuthSuccess = () => {
  const setIsAuth = useAuthStore((state) => state.setIsAuth);
  useEffect(() => {
    const getToken = async () => {
      const token = await refreshAccessToken();
      if (token) {
        toast.success('Successfully logged in!');
        setIsAuth(true);
        window.location.replace('/');
      } else {
        toast.error('Something went wrong. Try again!');
        setIsAuth(false);
        window.location.replace('/login');
      }
    };
    getToken();
  }, []);
  return (
    <div className="wrapper">
      <Header />
      <main className={styles.main}>
        <div className="container">
          <Loader />
        </div>
      </main>
      <Footer />
    </div>
  );
};
