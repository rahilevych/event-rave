import styles from './DateBtn.module.css';

interface DateBtnProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  isActive?: boolean;
}

export const DateBtn = ({ children, ...props }: DateBtnProps) => {
  return (
    <button className={`${styles.button} `} {...props}>
      {children}
    </button>
  );
};
