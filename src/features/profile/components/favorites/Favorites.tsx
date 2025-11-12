import styles from './Favorites.module.css';
import { EventCard } from '../../../event/ui/card/EventCard';
import { useEvents } from '../../../event/hooks/useEvents';

export const Favorites = () => {
  const { data: events = [], isLoading } = useEvents({});
  const likedEvents = events?.filter((event) => event.likedByUser);

  if (isLoading) return <p>Loading...</p>;

  return (
    <section className={styles.favorites}>
      {likedEvents.length > 0 ? (
        likedEvents.map((event, index) => (
          <EventCard key={index} card={event} />
        ))
      ) : (
        <p>No liked events</p>
      )}
    </section>
  );
};
