import styles from './EventSection.module.css';
import { events } from '../../data/events';
import { Title } from '../../../../shared/ui/title/Title';
import { EventSlider } from '../../ui/slider/EventSlider';

type EventSectionProps = {
  title: string;
};

export const EventsSection = ({ title }: EventSectionProps) => {
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
