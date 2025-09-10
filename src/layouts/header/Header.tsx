import { Link } from 'react-router-dom';
import { useWindowSize } from '../../shared/hooks/useWindowSize';
import { Button } from '../../shared/ui/Button/Button';
import styles from './Header.module.css';
import { MobileMenu } from './MobileMenu';
export const Header = () => {
  const { width } = useWindowSize();
  const isMobile = width < 768;
  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <div data-testid="logo" className={styles.logo}>
          <span>Event</span>
          <span>Rave</span>
        </div>
        {isMobile ? (
          <MobileMenu />
        ) : (
          <div className={styles.buttons}>
            <Link to="login">
              <Button className={styles.login}>Log in</Button>
            </Link>
            <Link to="registration">
              {' '}
              <Button className={styles.signup}> Sign up</Button>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};
