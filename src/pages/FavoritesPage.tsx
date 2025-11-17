import { Footer } from 'react-day-picker';
import { EventsList } from '../features/event/components/events-list/EventsList';
import { useEvents } from '../features/event/hooks/useEvents';
import { EventType } from '../features/event/model/types';
import { Header } from '../layouts/header/Header';
import styles from '../features/favorites/styles/FavoritesPage.module.css';
import { BackBtn } from '../shared/ui/back-btn/BackBtn';

export const FavoritesPage = () => {
  const { data: events = [], isLoading } = useEvents({});
  const likedEvents = events?.filter((event: EventType) => event.likedByUser);

  return (
    likedEvents && (
      <div className="wrapper">
        <Header />
        <main className={styles.main}>
          <div className="container">
            <div className={styles.header}>
              <BackBtn />
              <h2>Favorites</h2>
            </div>
            <EventsList loading={isLoading} events={likedEvents} />
          </div>
        </main>

        <Footer />
      </div>
    )
  );
};
