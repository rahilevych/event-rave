import styles from '../features/profile/styles/ProfilePage.module.css';

import { Logo } from '../shared/ui/logo/Logo';
export const ProfilePage = () => {
  const text = 'Event Rave';
  return (
    <div className={styles.profile}>
      <header className={styles.header}>
        <div className={styles.content}>
          <Logo text={text} className={styles.logo} />
        </div>
      </header>

      <div className="container">
        <main className={styles.content}></main>
      </div>
    </div>
  );
};
