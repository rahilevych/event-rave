import { useNavigate } from 'react-router-dom';
import { converDate } from '../../../../shared/lib/convertDate';

import styles from './EventCard.module.css';
import { LikeButton } from '../../../favorites/ui/like-btn/LikeButton';

import { EventType } from '../../model/types';

interface EventCardProps {
  card: EventType;
}
export const EventCard = ({ card }: EventCardProps) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/event/${card.id}`);
  };

  return (
    card && (
      <div
        className={styles.card}
        data-testid="event-card"
        onClick={handleCardClick}
      >
        <LikeButton eventId={card.id} likedByUser={card?.likedByUser} />
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
    )
  );
};
