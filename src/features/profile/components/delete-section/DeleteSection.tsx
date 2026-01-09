import { DeleteDialog } from '../delete-account-dialog/DeleteDialog';
import styles from './DeleteSection.module.css';
export const DeleteSection = () => {
  return (
    <div className={styles.delete}>
      <h3>Delete Personal Account</h3>
      <p>
        This will permanently remove your account, saved events, and all related
        information.
      </p>
      <DeleteDialog />
    </div>
  );
};
