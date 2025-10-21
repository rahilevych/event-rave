import styles from './EventSection.module.css';

import { Title } from '../../../../shared/ui/title/Title';
import { EventSlider } from '../../ui/slider/EventSlider';
import { useEventStore } from '../../model/EventStore';
import { useEffect, useState } from 'react';
import { EventType } from '../../model/types';

type EventSectionProps = {
  categoryId: number;
  title: string;
};

export const EventsSection = ({ title, categoryId }: EventSectionProps) => {
  const [events, setEvents] = useState<EventType[]>([]);
  const getEvents = useEventStore((state) => state.getEvents);

  useEffect(() => {
    const fetchEvents = async () => {
      const data = await getEvents(categoryId);
      setEvents(data);
    };
    fetchEvents();
  }, [categoryId, getEvents]);
  if (!events) return <p>Something went wrong. Try again later!</p>;
  if (events.length === 0) return <p>There are no events</p>;

  return (
    <section className={`container ${styles.events}`}>
      <header className={styles.header}>
        <Title text={title} className={styles.title} />
        <p>see all</p>
      </header>
      <div className={styles.slider}>
        <EventSlider events={events} />
      </div>
    </section>
  );
};
