import Skeleton from 'react-loading-skeleton';
import styles from './ResultItem.module.css';
export const ResultItemSkeleton = () => {
  return (
    <div className={styles.item}>
      <div className={styles.img}>
        <Skeleton width="100%" height="100%" />
      </div>
      <div className={styles.info}>
        <Skeleton width={200} height={20} />
        <Skeleton width={150} height={16} />
      </div>
    </div>
  );
};
