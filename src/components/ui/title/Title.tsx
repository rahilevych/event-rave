import styles from './Title.module.css';

type TitleProps = {
  text: string;
};
export const Title = ({ text }: TitleProps) => {
  const words = text.trim().split(' ');
  const lastWord = words.pop();
  const beginning = words.join(' ');
  return (
    <div>
      <h2 className={styles.title}>
        {beginning} <span className={styles.accent}>{lastWord}</span>
      </h2>
    </div>
  );
};
