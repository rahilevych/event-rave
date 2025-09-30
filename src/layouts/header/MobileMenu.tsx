import styles from './MobileMenu.module.css';

import { Dropdown } from '../../shared/ui/dropdown/Dropdown';
import { useNavigate } from 'react-router-dom';
import { MdClose, MdPerson, MdSearch } from 'react-icons/md';
import { useState } from 'react';
import MobileSearch from '../../features/search/components/mobile/MobileSearch';

type MenuItem = {
  label: string;
  path: string;
};
const menuItems: MenuItem[] = [
  { label: 'Sign in', path: '/login' },
  { label: 'Sign up', path: '/registration' },
];
export const MobileMenu = () => {
  const navigate = useNavigate();
  const [isSearchOpened, setIsSearchOpened] = useState(false);

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
      <Dropdown
        options={menuItems}
        onSelect={(item) => navigate(item.path)}
        renderItem={(item) => <span className={styles.item}>{item.label}</span>}
        classNameDropdown={`${styles.dropdown} ${styles.opened}`}
        classNameList={styles.list}
        openIcon={
          <MdPerson data-testid="person-icon" className={styles.icon} />
        }
        closedIcon={
          <MdClose data-testid="close-icon" className={styles.icon} />
        }
      />
    </div>
  );
};
