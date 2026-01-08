import { Button } from '../../../../shared/ui/Button/Button';
import styles from './DeleteSection.module.css';
export const DeleteSection = () => {
  return (
    <div className={styles.delete}>
      <h3>Delete Personal Account</h3>
      <p>
        This will permanently remove your account, saved events, and all related
        information.
      </p>
      <Button className={styles.btn}>Delete account</Button>
    </div>
  );
};
