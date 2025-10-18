import styles from './MobileMenu.module.css';
import { MdSearch } from 'react-icons/md';
import { useState } from 'react';
import MobileSearch from '../../../search/components/mobile/MobileSearch';

import { useAuthStore } from '../../../auth/model/AuthStore';
import { getMenuItems } from '../../../../config/menu-navigation';
import { NavDropdown } from '../../ui/nav-dropdown/NavDropdown';

export const MobileMenu = () => {
  const [isSearchOpened, setIsSearchOpened] = useState(false);
  const isAuth = useAuthStore((state) => state.isAuth);
  const logout = useAuthStore((state) => state.logout);
  return (
    <div data-testid="mobile-menu" className={styles.menu}>
      {isSearchOpened && (
        <MobileSearch
          isSearchOpened={isSearchOpened}
          setIsSearchOpened={setIsSearchOpened}
        />
      )}
      <button
        onClick={() => {
          setIsSearchOpened(true);
        }}
      >
        <MdSearch className={styles.icon} />
      </button>{' '}
      <NavDropdown menuItems={getMenuItems(isAuth, logout)} />
    </div>
  );
};
