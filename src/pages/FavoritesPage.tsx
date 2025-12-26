import { Footer } from 'react-day-picker';
import { EventsList } from '../features/event/components/events-list/EventsList';
import { useEvents } from '../features/event/hooks/useEvents';

import { Header } from '../layouts/header/Header';
import styles from '../features/favorites/styles/FavoritesPage.module.css';
import { BackBtn } from '../shared/ui/back-btn/BackBtn';
import { EventType } from '../features/event/model/types';

export const FavoritesPage = () => {
  const { data, isLoading } = useEvents({ onlyLiked: true, limit: 10 });
  const events: EventType[] = data?.pages.flat() ?? [];

  return (
    events && (
      <div className="wrapper">
        <Header />
        <main className={styles.main}>
          <div className="container">
            <div className={styles.header}>
              <BackBtn />
              <h2>Favorites</h2>
            </div>
            <EventsList loading={isLoading} events={events} />
          </div>
        </main>

        <Footer />
      </div>
    )
  );
};
