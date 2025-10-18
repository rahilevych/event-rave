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
        {menuItems.map((item, index) => (
          <Link className={styles.item} to={item.path} key={index}>
            <li>{item.label}</li>
          </Link>
        ))}
      </ul>
    </DropdownWrapper>
  );
};
