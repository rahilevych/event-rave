import Skeleton from 'react-loading-skeleton';
import styles from './EventPayment.module.css';
import 'react-loading-skeleton/dist/skeleton.css';
export const EventPaymentSkeleton = () => {
  return (
    <div className={styles.payment}>
      <Skeleton count={5} width={150} />
      <Skeleton width={50} />
    </div>
  );
};
