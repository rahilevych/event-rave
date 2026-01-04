import styles from './MobileMenu.module.css';
import { MdSearch } from 'react-icons/md';
import { useState } from 'react';
import MobileSearch from '../../../search/components/mobile/MobileSearch';

import { useAuthStore } from '../../../auth/model/AuthStore';
import { getMenuItems } from '../../../../config/menu-navigation';
import { NavDropdown } from '../../ui/nav-dropdown/NavDropdown';

import { HeartBtn } from '../../../../shared/ui/heart-btn/HeartBtn';
import { useLogout } from '../../../auth/hooks/useLogout';
import { useNavigate } from 'react-router-dom';

export const MobileMenu = () => {
  const [isSearchOpened, setIsSearchOpened] = useState(false);
  const isAuth = useAuthStore((state) => state.isAuth);
  const { mutate: logout } = useLogout();
  const navigate = useNavigate();
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
        <MdSearch className={styles.search} />
      </button>{' '}
      <HeartBtn
        className={styles.icon}
        onClick={() => navigate('/favorites')}
      />
      <NavDropdown menuItems={getMenuItems(isAuth, logout)} />
    </div>
  );
};
