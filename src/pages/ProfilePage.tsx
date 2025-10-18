import { useState } from 'react';
import { Sidebar } from '../features/profile/components/sidebar/Sidebar';
import styles from '../features/profile/styles/ProfilePage.module.css';

import { Logo } from '../shared/ui/logo/Logo';
import { Section } from '../features/profile/components/section/Section';
import { sidebarItems } from '../features/profile/constants/profileConstants';
import { useWindowSize } from '../shared/hooks/useWindowSize';
import { ProfileMenu } from '../features/profile/ui/profile-menu/ProfileMenu';

export const ProfilePage = () => {
  const text = 'Event Rave';
  const list = sidebarItems;

  const [infoComponent, setInfoComponet] = useState<React.ReactNode>(
    list[0].component,
  );
  const [title, setTitle] = useState<string>(list[0].label);

  const { width } = useWindowSize();
  const isMobile = width <= 768;
  return (
    <div className={styles.profile}>
      <header className={styles.header}>
        <div className={styles['logo-container']}>
          <Logo text={text} className={styles.logo} />
        </div>
      </header>

      <div className="container">
        <main className={styles.content}>
          {isMobile ? (
            <ProfileMenu
              list={sidebarItems}
              onTitleChange={setTitle}
              onClick={setInfoComponet}
            />
          ) : (
            <Sidebar
              list={list}
              onClick={setInfoComponet}
              onTitleChange={setTitle}
            />
          )}

          <Section component={infoComponent} title={title} />
        </main>
      </div>
    </div>
  );
};
