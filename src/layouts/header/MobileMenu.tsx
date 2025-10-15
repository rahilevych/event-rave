import styles from './MobileMenu.module.css';

import { DropdownWrapper } from '../../shared/ui/dropdown/DropdownWrapper';
import { Link } from 'react-router-dom';
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
      <DropdownWrapper
        trigger={(isOpen) =>
          isOpen ? (
            <MdPerson className={styles.icon} />
          ) : (
            <MdClose className={styles.icon} />
          )
        }
      >
        <ul className={styles.list}>
          {menuItems.map((item, index) => (
            <Link className={styles.item} to={item.path} key={index}>
              <li>{item.label}</li>
            </Link>
          ))}
        </ul>
      </DropdownWrapper>
    </div>
  );
};
