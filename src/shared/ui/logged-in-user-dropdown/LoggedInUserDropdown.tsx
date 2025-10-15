import { Link, useNavigate } from 'react-router-dom';
import { DropdownWrapper } from '../dropdown/DropdownWrapper';
import styles from './LoggedInUserDropdown.module.css';
import { UserImg } from '../user-img/UserImg';
import { useAuthStore } from '../../../features/auth/model/AuthStore';

type LoggedInUserDropdown = {
  label: string;
  path?: string;
  onClick?: () => void;
};

export const LoggedInUserDropdown = () => {
  const logout = useAuthStore((state) => state.logout);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/', { replace: true });
    } catch (error) {
      console.error('Logout error', error);
    }
  };
  const menuItems: LoggedInUserDropdown[] = [
    { label: 'Profile', path: '/profile' },
    { label: 'Log out', onClick: handleLogout },
  ];

  return (
    <div className={styles.dropdown}>
      <DropdownWrapper trigger={<UserImg />}>
        <ul className={styles.list}>
          {menuItems.map((item, index) =>
            item.path ? (
              <Link className={styles.item} key={index} to={item.path}>
                <li>{item.label}</li>
              </Link>
            ) : (
              <li
                key={index}
                onClick={item.onClick}
                className={`${styles.item} ${styles.logout}`}
              >
                {item.label}
              </li>
            ),
          )}
        </ul>
      </DropdownWrapper>
    </div>
  );
};
