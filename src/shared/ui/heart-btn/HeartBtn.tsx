import { FaRegHeart } from 'react-icons/fa';
import styles from './HeartBtn.module.css';
interface HeartBtnProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}
export const HeartBtn = ({ className, ...props }: HeartBtnProps) => {
  return (
    <button className={`${styles.btn} ${className}`} {...props}>
      {' '}
      <FaRegHeart className={styles.icon} />
    </button>
  );
};
