import { splitText } from '../../utils/splitText';
import styles from './Logo.module.css';
import { Link } from 'react-router-dom';
type LogoProps = {
  text: string;
};
export const Logo = ({ text }: LogoProps) => {
  const { beginning, lastWord } = splitText(text);
  return (
    <Link to="/">
      <div className={`${styles.logo}`}>
        {beginning && <>{beginning}</>}
        <span className={styles.accent}>{lastWord}</span>
      </div>
    </Link>
  );
};
