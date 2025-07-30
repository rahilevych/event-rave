import { useWindowSize } from '../../shared/hooks/useWindowSize';
import { Button } from '../../shared/ui/Button/Button';
import { Logo } from '../../shared/ui/logo/Logo';
import styles from './Header.module.css';
import { MobileMenu } from './MobileMenu';
export const Header = () => {
  const { width } = useWindowSize();
  const isMobile = width < 768;
  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <Logo />
        {isMobile ? (
          <MobileMenu />
        ) : (
          <div className={styles.buttons}>
            <Button className={styles.login}>Log in</Button>
            <Button className={styles.signup}> Sign up</Button>
          </div>
        )}
      </div>
    </header>
  );
};
