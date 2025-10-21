import { converDate } from '../../../../shared/lib/convertDate';
import { EventType } from '../../model/types';
import styles from './EventCard.module.css';

type EventCardProps = {
  card: EventType;
};
export const EventCard = ({ card }: EventCardProps) => {
  return (
    <div className={styles.card} data-testid="event-card">
      <div className={styles.img}>
        <img src={card.imageUrl} alt="event" />
      </div>
      <div className={styles.info}>
        <p className={styles.title}>{card.title}</p>
        <p className={styles.date}>{converDate(card.date)}</p>
        <p className={styles.venue}>
          {card.venue}, {card.city}
        </p>
        <p className={styles.price}>{Math.floor(card.price)} $</p>
        <p className={styles.organizer}>{card.organizer}</p>
      </div>
    </div>
  );
};
