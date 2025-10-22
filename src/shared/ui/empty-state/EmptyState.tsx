import styles from './EmptyState.module.css';

interface EmptyStateProps {
  dataName: string;
}
export const EmptyState = ({ dataName }: EmptyStateProps) => {
  return (
    <div className={styles.container}>
      <p>No {dataName} found</p>
    </div>
  );
};
