import styles from './DateBtn.module.css';

interface DateBtnProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const DateBtn = ({ children }: DateBtnProps) => {
  return <div className={styles.button}>{children}</div>;
};
