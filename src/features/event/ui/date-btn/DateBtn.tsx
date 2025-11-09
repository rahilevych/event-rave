import { FiX } from 'react-icons/fi';
import styles from './DateBtn.module.css';

interface DateBtnProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  isActive?: boolean;
  onClear: () => void;
}

export const DateBtn = ({
  children,
  isActive,
  onClear,
  ...props
}: DateBtnProps) => {
  return (
    <button
      className={`${styles.button} ${isActive ? styles.active : ''}`}
      {...props}
    >
      {children}
      {isActive && (
        <FiX
          className={styles.icon}
          onClick={(e) => {
            e.stopPropagation();
            onClear();
          }}
        />
      )}
    </button>
  );
};
