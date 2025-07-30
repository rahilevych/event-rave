import styles from './Logo.module.css';

export const Logo = () => {
  return (
    <div data-testid="logo" className={styles.logo}>
      <span>Event</span>
      <span>Rave</span>
    </div>
  );
};
