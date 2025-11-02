import styles from './EventSection.module.css';
import { Title } from '../../../../shared/ui/title/Title';
import { EventSlider } from '../../ui/slider/EventSlider';
import { useEventStore } from '../../model/EventStore';
import { useFetch } from '../../../../shared/hooks/useFetch';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface EventSectionProps {
  categoryId: number;
  title: string;
}

export const EventsSection = ({ title, categoryId }: EventSectionProps) => {
  const getEvents = useEventStore((state) => state.getEvents);
  const { data: events, execute } = useFetch(getEvents);
  const navigate = useNavigate();

  const handleSeeAllClick = () => {
    navigate(`/events/${categoryId}`);
  };

  useEffect(() => {
    execute({ categoryId: categoryId });
  }, [categoryId, execute]);

  return (
    events && (
      <section className={`container ${styles.events}`}>
        <header className={styles.header}>
          <Title text={title} className={styles.title} />
          <p onClick={handleSeeAllClick}>see all</p>
        </header>

        <div className={styles.slider}>
          {' '}
          <EventSlider events={events} />
        </div>
      </section>
    )
  );
};
