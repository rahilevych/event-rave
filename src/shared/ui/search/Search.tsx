import { useEffect, useState } from 'react';
import { Input } from '../input/Input';
import styles from './Search.module.css';
import { FiSearch, FiX } from 'react-icons/fi';

export const Search = () => {
  const [text, setText] = useState('');
  const placeholders = ['concerts', 'museums', 'festivals'];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIndex((prev) => (prev + 1) % placeholders.length);
    }, 2000);
    return () => clearTimeout(timeout);
  }, [index]);

  return (
    <div className={styles['input-wrapper']}>
      <FiSearch className={styles['search-icon']} />
      <Input
        className={styles.input}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      {text && (
        <button className={styles['clear-button']} onClick={() => setText('')}>
          <FiX />
        </button>
      )}
      {text === '' && (
        <span key={index} className={styles.placeholder}>
          Search for{' '}
          <span className={styles.changeable}> {placeholders[index]}</span>
        </span>
      )}
    </div>
  );
};
