import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import styles from './EventCard.module.css';

export const EventCardSkeleton = () => {
  return (
    <div className={styles.card}>
      <div className={styles.img}>
        <Skeleton
          width="100%"
          height="100%"
          borderRadius="var(--border-radius-block)"
        />
      </div>
      <div className={styles.info}>
        <Skeleton width={200} />
        <Skeleton width={150} />
        <Skeleton width={150} />
        <Skeleton width={100} />
        <Skeleton width={50} />
      </div>
    </div>
  );
};
