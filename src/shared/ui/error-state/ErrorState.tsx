import styles from './ErrorState.module.css';

export const ErrorState = () => {
  return (
    <div className={styles.container}>
      <p>Something went wrong. Try again later. </p>
    </div>
  );
};
