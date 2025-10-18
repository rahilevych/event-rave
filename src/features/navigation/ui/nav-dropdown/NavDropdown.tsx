import styles from './NavDropdown.module.css';
import { DropdownWrapper } from '../../../../shared/ui/dropdown/DropdownWrapper';
import { UserImg } from '../../../../shared/ui/user-img/UserImg';
import { Link } from 'react-router-dom';
import { MenuItem } from '../../types/types';

interface NavDropdownProps {
  menuItems: MenuItem[];
}
export const NavDropdown = ({ menuItems }: NavDropdownProps) => {
  return (
    <DropdownWrapper direction="bottom" trigger={<UserImg />}>
      <ul className={styles.list}>
        {menuItems.map((item, index) =>
          item.onClick ? (
            <li key={index} className={styles.item} onClick={item.onClick}>
              {item.label}
            </li>
          ) : (
            <Link key={index} className={styles.item} to={item.path || '#'}>
              {item.label}
            </Link>
          ),
        )}
      </ul>
    </DropdownWrapper>
  );
};
