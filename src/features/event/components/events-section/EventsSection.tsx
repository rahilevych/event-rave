import styles from './EventSection.module.css';
import { Title } from '../../../../shared/ui/title/Title';
import { EventSlider } from '../../ui/slider/EventSlider';
import { useEventStore } from '../../model/EventStore';

import { useFetch } from '../../../../shared/hooks/useFetch';
import { Loader } from '../../../../shared/ui/loader/Loader';
import { useEffect } from 'react';
import { ErrorState } from '../../../../shared/ui/error-state/ErrorState';
import { EmptyState } from '../../../../shared/ui/empty-state/EmptyState';
import { useNavigate } from 'react-router-dom';

type EventSectionProps = {
  categoryId: number;
  title: string;
};

export const EventsSection = ({ title, categoryId }: EventSectionProps) => {
  const getEvents = useEventStore((state) => state.getEvents);
  const { data: events, loading, error, execute } = useFetch(getEvents);
  const navigate = useNavigate();

  const handleSeeAllClick = () => {
    navigate(`/events/${categoryId}`);
  };

  useEffect(() => {
    execute({ categoryId: categoryId });
  }, [categoryId, execute]);
  if (loading) return <Loader />;
  if (error) return <ErrorState />;
  if (!events?.length) return <EmptyState dataName="events" />;

  return (
    <section className={`container ${styles.events}`}>
      <header className={styles.header}>
        <Title text={title} className={styles.title} />
        <p onClick={handleSeeAllClick}>see all</p>
      </header>
      <div className={styles.slider}>
        <EventSlider events={events} />
      </div>
    </section>
  );
};
