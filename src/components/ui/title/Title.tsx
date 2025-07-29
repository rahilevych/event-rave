import styles from './Title.module.css';

type TitleProps = {
  text: string;
  className?: string;
};
export const Title = ({ text, className }: TitleProps) => {
  const words = text.trim().split(' ');
  const lastWord = words.pop();
  const beginning = words.join(' ');
  return (
    <h2 className={`${styles.title} ${className}`}>
      {beginning && <>{beginning}&nbsp;</>}
      <span className={styles.accent}>{lastWord}</span>
    </h2>
  );
};
