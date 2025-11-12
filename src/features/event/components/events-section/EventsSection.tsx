import styles from './EventSection.module.css';
import { Title } from '../../../../shared/ui/title/Title';
import { EventSlider } from '../../ui/slider/EventSlider';
import { useNavigate } from 'react-router-dom';
import { EventSectionSkeleton } from './EventSectionSkeleton';
import { useEvents } from '../../hooks/useEvents';

interface EventSectionProps {
  categoryId: number;
  title: string;
}

export const EventsSection = ({ title, categoryId }: EventSectionProps) => {
  const { data: events, isLoading } = useEvents({ categoryId: categoryId });
  const navigate = useNavigate();

  const handleSeeAllClick = () => {
    navigate(`/events/${categoryId}`);
  };
  if (isLoading) return <EventSectionSkeleton />;

  return (
    events && (
      <section className={`container ${styles.events}`}>
        <header className={styles.header}>
          <Title text={title} className={styles.title} />
          <p onClick={handleSeeAllClick}>see all</p>
        </header>
        <div className={styles.slider}>
          <EventSlider events={events} />
        </div>
      </section>
    )
  );
};
