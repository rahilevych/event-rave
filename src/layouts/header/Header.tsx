import { Link } from 'react-router-dom';
import { useWindowSize } from '../../shared/hooks/useWindowSize';
import { Button } from '../../shared/ui/Button/Button';
import styles from './Header.module.css';
import { MobileMenu } from './MobileMenu';

import { Logo } from '../../shared/ui/logo/Logo';
import { SearchSection } from '../../features/search/components/search-section/SearchSection';
export const Header = () => {
  const { width } = useWindowSize();
  const isMobile = width < 768;
  const text = 'Event Rave';
  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <Logo text={text} className={styles.logo} />
        {isMobile ? (
          <MobileMenu />
        ) : (
          <>
            <SearchSection />
            <div className={styles.buttons}>
              <Link to="login">
                <Button className={styles.login}>Log in</Button>
              </Link>
              <Link to="registration">
                <Button className={styles.signup}> Sign up</Button>
              </Link>
            </div>
          </>
        )}
      </div>
    </header>
  );
};
