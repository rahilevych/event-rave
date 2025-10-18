import { useWindowSize } from '../../shared/hooks/useWindowSize';
import styles from './Header.module.css';

import { Logo } from '../../shared/ui/logo/Logo';
import { SearchSection } from '../../features/search/components/search-section/SearchSection';
import { useAuthStore } from '../../features/auth/model/AuthStore';

import { getMenuItems } from '../../config/menu-navigation';
import { NavDropdown } from '../../features/navigation/ui/nav-dropdown/NavDropdown';
import { MobileMenu } from '../../features/navigation/components/mobile-menu/MobileMenu';
export const Header = () => {
  const { width } = useWindowSize();
  const isMobile = width < 768;
  const text = 'Event Rave';
  const isAuth = useAuthStore((state) => state.isAuth);
  const logout = useAuthStore((state) => state.logout);
  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <Logo text={text} className={styles.logo} />
        {isMobile ? (
          <MobileMenu />
        ) : (
          <div className={styles['laptop-menu']}>
            <SearchSection />
            <NavDropdown menuItems={getMenuItems(isAuth, logout)} />
          </div>
        )}
      </div>
    </header>
  );
};
