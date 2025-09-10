import styles from './Logo.module.css';
import { Link } from 'react-router-dom';

export const Logo = () => {
  return (
    <Link to="/">
      {' '}
      <div data-testid="logo" className={styles.logo}>
        <span>Event</span>
        <span>Rave</span>
      </div>{' '}
    </Link>
  );
};
