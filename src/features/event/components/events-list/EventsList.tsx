import { useEffect, useState } from 'react';
import { useFetch } from '../../../../shared/hooks/useFetch';
import { useEventStore } from '../../model/EventStore';
import { EventType } from '../../model/types';
import { EventCard } from '../../ui/card/EventCard';
import styles from './EventsList.module.css';

interface EventListProps {
  categoryId?: number;
}
export const EventsList = ({ categoryId }: EventListProps) => {
  const [events, setEvents] = useState<EventType[] | []>([]);
  const getEvents = useEventStore((state) => state.getEvents);
  const { execute } = useFetch(getEvents);

  useEffect(() => {
    execute({ categoryId: categoryId }).then((res: EventType[]) =>
      setEvents(res || []),
    );
  }, [execute]);

  return (
    <section className={styles.events}>
      {events.map((event) => (
        <EventCard card={event} />
      ))}
    </section>
  );
};
