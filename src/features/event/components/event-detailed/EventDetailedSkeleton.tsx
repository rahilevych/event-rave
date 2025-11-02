import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import styles from './EventDetailedSkeleton.module.css';

export const EventDetailedSkeleton = () => {
  return (
    <div className={styles.skeleton}>
      <div className={styles.img}>
        <Skeleton height={450} borderRadius="var(--border-radius-block)" />
      </div>
      <div className={styles.info}>
        <Skeleton width={200} height={24} />
        <Skeleton count={3} />
        <Skeleton width={150} height={20} />
      </div>
    </div>
  );
};
