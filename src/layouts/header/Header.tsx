import { useWindowSize } from '../../shared/hooks/useWindowSize';
import styles from './Header.module.css';
import { Logo } from '../../shared/ui/logo/Logo';
import { SearchSection } from '../../features/search/components/search-section/SearchSection';
import { useAuthStore } from '../../features/auth/model/AuthStore';
import { getMenuItems } from '../../config/menu-navigation';
import { NavDropdown } from '../../features/navigation/ui/nav-dropdown/NavDropdown';
import { MobileMenu } from '../../features/navigation/components/mobile-menu/MobileMenu';
import { HeartBtn } from '../../shared/ui/heart-btn/HeartBtn';
import { useLogout } from '../../features/auth/hooks/useLogout';
import { useNavigate } from 'react-router-dom';
export const Header = () => {
  const { width } = useWindowSize();
  const isMobile = width < 768;
  const text = 'Event Rave';
  const isAuth = useAuthStore((state) => state.isAuth);
  const navigate = useNavigate();
  const { mutate: logout } = useLogout();
  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <Logo text={text} className={styles.logo} />
        {isMobile ? (
          <MobileMenu />
        ) : (
          <div className={styles['laptop-menu']}>
            <SearchSection />
            <div className={styles.nav}>
              <HeartBtn onClick={() => navigate('/favorites')} />
              <NavDropdown menuItems={getMenuItems(isAuth, logout)} />
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
