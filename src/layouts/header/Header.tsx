import { useWindowSize } from '../../shared/hooks/useWindowSize';
import styles from './Header.module.css';
import { Logo } from '../../shared/ui/logo/Logo';
import { SearchSection } from '../../features/search/components/search-section/SearchSection';
import { useAuthStore } from '../../features/auth/model/AuthStore';
import { getMenuItems } from '../../config/menu-navigation';
import { NavDropdown } from '../../features/navigation/ui/nav-dropdown/NavDropdown';
import { MobileMenu } from '../../features/navigation/components/mobile-menu/MobileMenu';
import { useAuth } from '../../features/auth/hooks/useAuth';
import { HeartBtn } from '../../shared/ui/heart-btn/HeartBtn';
export const Header = () => {
  const { width } = useWindowSize();
  const isMobile = width < 768;
  const text = 'Event Rave';
  const isAuth = useAuthStore((state) => state.isAuth);
  const { logout } = useAuth();
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
              <HeartBtn />
              <NavDropdown
                menuItems={getMenuItems(isAuth, logout.mutateAsync)}
              />
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
