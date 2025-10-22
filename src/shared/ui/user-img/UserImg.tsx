import { MdPerson } from 'react-icons/md';
import styles from './UserImg.module.css';

type UserImg = {
  img?: string;
  className?: string;
};
export const UserImg = ({ img, className }: UserImg) => {
  return (
    <div className={`${styles.image} ${className || ''} `}>
      {img ? (
        <img src={img} alt="user-image" />
      ) : (
        <MdPerson className={styles.icon} />
      )}
    </div>
  );
};
