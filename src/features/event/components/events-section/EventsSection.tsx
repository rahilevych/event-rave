import styles from './EventSection.module.css';
import { Title } from '../../../../shared/ui/title/Title';
import { EventSlider } from '../../ui/slider/EventSlider';
import { useEventStore } from '../../model/EventStore';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { EventSectionSkeleton } from './EventSectionSkeleton';

interface EventSectionProps {
  categoryId: number;
  title: string;
}

export const EventsSection = ({ title, categoryId }: EventSectionProps) => {
  const getEvents = useEventStore((state) => state.getEvents);
  const eventsByCategory = useEventStore((state) => state.eventsByCategory);
  const events = eventsByCategory[categoryId] || [];
  const navigate = useNavigate();

  const handleSeeAllClick = () => {
    navigate(`/events/${categoryId}`);
  };

  useEffect(() => {
    getEvents({ categoryId: categoryId });
  }, []);

  return events.length > 0 ? (
    <section className={`container ${styles.events}`}>
      <header className={styles.header}>
        <Title text={title} className={styles.title} />
        <p onClick={handleSeeAllClick}>see all</p>
      </header>
      <div className={styles.slider}>
        <EventSlider events={events} />
      </div>
    </section>
  ) : (
    <EventSectionSkeleton />
  );
};
