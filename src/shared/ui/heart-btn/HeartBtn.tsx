import { FaRegHeart } from 'react-icons/fa';
import styles from './HeartBtn.module.css';
import { useNavigate } from 'react-router-dom';
interface HeartBtnProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}
export const HeartBtn = ({ className, ...props }: HeartBtnProps) => {
  const navigate = useNavigate();

  return (
    <button
      className={`${styles.btn} ${className}`}
      {...props}
      onClick={() => navigate('/favorites')}
    >
      {' '}
      <FaRegHeart className={styles.icon} />
    </button>
  );
};
