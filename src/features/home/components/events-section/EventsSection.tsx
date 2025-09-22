import styles from './EventSection.module.css';

import { events } from '../data/events';
import { Title } from '../../../../shared/ui/title/Title';
import { EventCard } from './EventCard';

export const EventsSection = () => {
  const title = 'Upcoming events';

  return (
    <div className={`container ${styles.events}`}>
      <header className={styles.header}>
        <Title text={title} />
      </header>
      <main>
        {events === null ? (
          <p>Something went wrong. Try again later !</p>
        ) : events.length === 0 ? (
          <p>There are no events</p>
        ) : (
          <div className={styles.cards}>
            {events.map((event, index) => (
              <EventCard card={event} key={index} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
};
