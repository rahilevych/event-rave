import { Button } from "../../components/ui/Button/Button";
import { useWindowSize } from "../../hooks/useWindowSize";
import styles from "./Header.module.css";
import { MobileMenu } from "./MobileMenu";
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
            <Button className={styles.login}>Log in</Button>
            <Button> Sign up</Button>
          </div>
        )}
      </div>
    </header>
  );
};
