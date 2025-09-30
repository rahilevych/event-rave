import { splitText } from '../../utils/splitText';
import styles from './Title.module.css';

type TitleProps = {
  text: string;
  className?: string;
};
export const Title = ({ text, className }: TitleProps) => {
  const { beginning, lastWord } = splitText(text);
  return (
    <h2 className={`${styles.title} ${className}`}>
      {beginning && <>{beginning}&nbsp;</>}
      <span className={styles.accent}>{lastWord}</span>
    </h2>
  );
};
