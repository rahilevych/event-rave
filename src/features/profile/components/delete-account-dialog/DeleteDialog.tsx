import { useState } from 'react';
import * as AlertDialog from '@radix-ui/react-alert-dialog';
import { Button } from '../../../../shared/ui/Button/Button';
import styles from './DeleteDialog.module.css';
import { useDeleteUser } from '../../../auth/hooks/useDeleteUser';
const CONFIRM_TEXT = 'DELETE';

export const DeleteDialog = () => {
  const [value, setValue] = useState('');
  const isApproved = value.trim().toUpperCase() === CONFIRM_TEXT;

  const { mutate: deleteUser } = useDeleteUser();

  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger asChild>
        <Button className={styles.btn}>Delete account</Button>
      </AlertDialog.Trigger>
      <AlertDialog.Portal>
        <AlertDialog.Overlay className={styles.overlay} />
        <AlertDialog.Content className={styles.content}>
          <AlertDialog.Title>Delete account</AlertDialog.Title>

          <AlertDialog.Description>
            This will permanently remove your account, saved events, and all
            related information.
          </AlertDialog.Description>

          <label className={styles.label}>
            <p>
              Type <strong>{CONFIRM_TEXT}</strong> to confirm
            </p>
            <input
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder={CONFIRM_TEXT}
            />
          </label>

          <div className={styles.actions}>
            <AlertDialog.Cancel asChild>
              <Button className={`${styles.button} ${styles.cancel}`}>
                Cancel
              </Button>
            </AlertDialog.Cancel>

            <AlertDialog.Action asChild>
              <Button
                className={`${styles.button} ${styles.danger}`}
                disabled={!isApproved}
                onClick={() => deleteUser()}
              >
                Delete permanently
              </Button>
            </AlertDialog.Action>
          </div>
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  );
};
