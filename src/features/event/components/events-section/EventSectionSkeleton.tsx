import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import styles from './EventSection.module.css';
import { EventSliderSkeleton } from '../../ui/slider/EventSliderSkeleton';

export const EventSectionSkeleton = () => {
  return (
    <section className={`container ${styles.events}`}>
      <header className={styles.header}>
        <Skeleton width={200} height={30} />
        <Skeleton width={80} height={20} />
      </header>
      <EventSliderSkeleton />
    </section>
  );
};
