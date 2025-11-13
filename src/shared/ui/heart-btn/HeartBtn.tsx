import { FaRegHeart } from 'react-icons/fa';
import styles from './HeartBtn.module.css';
import { useNavigate } from 'react-router-dom';
export const HeartBtn = ({
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  const navigate = useNavigate();

  return (
    <button {...props} onClick={() => navigate('/favorites')}>
      {' '}
      <FaRegHeart className={styles.icon} />
    </button>
  );
};
