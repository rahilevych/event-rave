import { Event } from '../../../../shared/types/types';
import styles from './EventCard.module.css';

type EventCardProps = {
  card: Event;
};
export const EventCard = ({ card }: EventCardProps) => {
  return (
    <div className={styles.card} data-testid="event-card">
      <div className={styles.img}>
        <img src={card.image} alt="event" />
      </div>
      <div className={styles.info}>
        <p className={styles.title}>{card.title}</p>
        <p className={styles.date}>{card.date}</p>
        <p className={styles.location}>{card.location}</p>
      </div>
    </div>
  );
};
