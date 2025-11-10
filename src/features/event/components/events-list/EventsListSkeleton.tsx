import { EventCardSkeleton } from '../../ui/card/EventCardSkeleton';
import styles from './EventsList.module.css';

export const EventsListSkeleton = () => {
  return (
    <section className={styles.eventsList}>
      <div className={styles.events}>
        {[...Array(10)].map((_, index) => (
          <EventCardSkeleton key={index} />
        ))}
      </div>
    </section>
  );
};
