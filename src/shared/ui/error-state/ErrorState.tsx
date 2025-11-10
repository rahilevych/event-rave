import styles from './ErrorState.module.css';
interface ErrorState {
  errorNotification: string;
}
export const ErrorState = ({ errorNotification }: ErrorState) => {
  return (
    <div className={styles.container}>
      <p>{errorNotification} </p>
    </div>
  );
};
