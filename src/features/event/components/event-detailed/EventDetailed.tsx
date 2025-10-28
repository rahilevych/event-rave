import { converDate } from '../../../../shared/lib/convertDate';
import { EventType } from '../../model/types';
import { EventHeader } from '../../ui/event-header/EventHeader';
import styles from './EventDetailed.module.css';
interface EventDetailedProps {
  event: EventType | null;
}
export const EventDetailed = ({ event }: EventDetailedProps) => {
  return (
    <div className={styles.detailed}>
      <div className={styles.img}>
        <img src={event?.imageUrl} alt="event-image" />
      </div>
      <div className={styles.info}>
        <EventHeader event={event} />
        <p className={styles.description}>{event?.description}</p>
        <span>General info:</span>
        <p>Location: {event?.venue}</p>
        <p>Data: {converDate(event?.date)}</p>
      </div>
    </div>
  );
};
