import { useState } from 'react';
import { ProfileData } from '../profile-data/ProfileData';
import { ProfileForm } from '../profile-form/ProfileForm';
import styles from './ProfileInfo.module.css';

export const ProfileInfo = () => {
  const [isEditing, setIsEditing] = useState(false);
  return (
    <div className={styles['profile-info']}>
      {isEditing ? (
        <ProfileForm onCancel={() => setIsEditing(false)} />
      ) : (
        <ProfileData onEdit={() => setIsEditing(true)} />
      )}
    </div>
  );
};
