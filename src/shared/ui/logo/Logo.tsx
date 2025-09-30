import { splitText } from '../../utils/splitText';
import styles from './Logo.module.css';
import { Link } from 'react-router-dom';
type LogoProps = {
  text: string;
  className?: string;
};
export const Logo = ({ text, className }: LogoProps) => {
  const { beginning, lastWord } = splitText(text);
  return (
    <Link to="/">
      <div className={`${styles.logo} ${className}`}>
        {beginning && <>{beginning}</>}
        <span className={styles.accent}>{lastWord}</span>
      </div>
    </Link>
  );
};
