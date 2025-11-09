import { MdSearch } from 'react-icons/md';
import { EventType } from '../../model/types';
import { EventCard } from '../../ui/card/EventCard';
import styles from './EventsList.module.css';
interface EventListProps {
  events: EventType[];
}
export const EventsList = ({ events }: EventListProps) => {
  return (
    <section className={styles.eventsList}>
      {events.length !== 0 ? (
        <div className={styles.events}>
          {events.map((event) => (
            <EventCard card={event} />
          ))}
        </div>
      ) : (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
          <MdSearch size={50} color="#ccc" />
          <p>No results found</p>
        </div>
      )}
    </section>
  );
};
