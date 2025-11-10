import Skeleton from 'react-loading-skeleton';
import styles from './EventsHeader.module.css';
export const EventsHeaderSkeleton = () => {
  return (
    <section className={styles.header}>
      <Skeleton className={styles.title} width={300} height={20} />
      <Skeleton className={styles.description} width={400} height={16} />
    </section>
  );
};
