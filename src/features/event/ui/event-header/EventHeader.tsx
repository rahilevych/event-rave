import { MdSupervisorAccount } from 'react-icons/md';
import { EventType } from '../../model/types';
import styles from './EventHeader.module.css';

interface EventHeaderProps {
  event: EventType | null;
}
export const EventHeader = ({ event }: EventHeaderProps) => {
  return (
    <div className={styles.header}>
      <h2 className={styles.title}>{event?.title}</h2>
      <p className={styles.organizer}>
        <MdSupervisorAccount />
        {event?.organizer}
      </p>
    </div>
  );
};
