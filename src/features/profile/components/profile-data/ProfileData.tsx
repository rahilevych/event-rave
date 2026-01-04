import { Button } from '../../../../shared/ui/Button/Button';
import { Loader } from '../../../../shared/ui/loader/Loader';
import { UserImg } from '../../../../shared/ui/user-img/UserImg';
import { useGetUser } from '../../../auth/hooks/useGetUser';

import styles from './ProfileData.module.css';

interface ProfileDataProps {
  onEdit: () => void;
}
export const ProfileData = ({ onEdit }: ProfileDataProps) => {
  const { data: user, isPending } = useGetUser();

  if (isPending) {
    return <Loader />;
  }
  return (
    <div className={styles.data}>
      <UserImg className={styles.img} />
      <div className={styles['user-info']}>
        <p>
          <b>Full name:</b> {user?.fullName}
        </p>
        <p>
          <b>Email:</b> {user?.email}
        </p>
      </div>
      <Button onClick={onEdit} className={styles.btn}>
        Edit info
      </Button>
    </div>
  );
};
