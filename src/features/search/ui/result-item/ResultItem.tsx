import { EventType } from '../../../event/model/types';
import styles from './ResultItem.module.css';
interface ResultItemProps {
  event: EventType;
}

export const ResultItem = ({ event }: ResultItemProps) => {
  return (
    <div className={styles.item}>
      <div className={styles.img}>
        <img src={event.imageUrl} alt="event image" />
      </div>
      <div className={styles.info}>
        <p className={styles.organizer}>{event.organizer}</p>
        <p>{event.title}</p>
      </div>
    </div>
  );
};
