import { useState } from 'react';
import { Sidebar } from '../features/profile/components/sidebar/Sidebar';
import styles from '../features/profile/styles/ProfilePage.module.css';

import { Logo } from '../shared/ui/logo/Logo';
import { Section } from '../features/profile/components/section/Section';
import { ProfileInfo } from '../features/profile/components/profile-info/ProfileInfo';
import { Favorites } from '../features/profile/components/favorites/Favorites';
import { Tikets } from '../features/profile/components/tikets/Tikets';
export const ProfilePage = () => {
  const text = 'Event Rave';
  const list = [
    { id: 'profile', label: 'Profile', component: <ProfileInfo /> },
    { id: 'favorites', label: 'Favorites', component: <Favorites /> },
    { id: 'tikets', label: 'Tickets', component: <Tikets /> },
  ];
  const [infoComponent, setInfoComponet] = useState<React.ReactNode>(
    list[0].component,
  );
  const [title, setTitle] = useState<string>(list[0].label);

  return (
    <div className={styles.profile}>
      <header className={styles.header}>
        <div className={styles['logo-container']}>
          <Logo text={text} className={styles.logo} />
        </div>
      </header>

      <div className="container">
        <main className={styles.content}>
          <Sidebar
            list={list}
            onClick={setInfoComponet}
            onTitleChange={setTitle}
          />
          <Section component={infoComponent} title={title} />
        </main>
      </div>
    </div>
  );
};
