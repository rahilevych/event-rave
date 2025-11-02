import { converDate as convertDate } from '../../../../shared/lib/convertDate';
import { Button } from '../../../../shared/ui/Button/Button';
import { EventType } from '../../model/types';
import styles from './EventPayment.module.css';

interface EventPaymentProps {
  event: EventType;
}
export const EventPayment = ({ event }: EventPaymentProps) => {
  return (
    <div className={styles.payment}>
      <h3 className={styles.title}>{event.title}</h3>
      <p>
        <span>Organizer: </span>
        {event.organizer}
      </p>
      <p>
        <span>Location: </span>
        {event.venue}
      </p>

      <p>
        <span>Date: </span>
        {convertDate(event?.date)}
      </p>
      <p>
        <span>Price: </span>
        {Math.floor(event.price)} $
      </p>
      <Button className={styles.btn}>Buy ticket</Button>
    </div>
  );
};
