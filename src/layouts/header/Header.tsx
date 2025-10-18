import { useWindowSize } from '../../shared/hooks/useWindowSize';
import styles from './Header.module.css';
import { MobileMenu } from './MobileMenu';
import { Logo } from '../../shared/ui/logo/Logo';
import { SearchSection } from '../../features/search/components/search-section/SearchSection';
import { useAuthStore } from '../../features/auth/model/AuthStore';

import { NavDropdown } from './ui/nav-dropdown/NavDropdown';
import { getMenuItems } from '../../config/menu-navigation';
export const Header = () => {
  const { width } = useWindowSize();
  const isMobile = width < 768;
  const text = 'Event Rave';
  const isAuth = useAuthStore((state) => state.isAuth);
  const menuItems = getMenuItems(isAuth);
  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <Logo text={text} className={styles.logo} />
        {isMobile ? (
          <MobileMenu />
        ) : (
          <div className={styles['laptop-menu']}>
            <SearchSection />
            <NavDropdown menuItems={menuItems} />
          </div>
        )}
      </div>
    </header>
  );
};
