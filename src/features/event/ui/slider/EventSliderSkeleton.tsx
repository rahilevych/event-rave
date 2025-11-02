import { EventCardSkeleton } from '../card/EventCardSkeleton';
import styles from './EventSliderSkeleton.module.css';
import 'react-loading-skeleton/dist/skeleton.css';

export const EventSliderSkeleton = () => {
  const skeletonCount =
    window.innerWidth > 1440
      ? 4
      : window.innerWidth > 1100
        ? 3
        : window.innerWidth > 768
          ? 2
          : 1;
  return (
    <div className={styles.wrapper}>
      {[...Array(skeletonCount)].map((_, index) => (
        <div key={index} className={styles.slideSkeleton}>
          <EventCardSkeleton />
        </div>
      ))}
    </div>
  );
};
