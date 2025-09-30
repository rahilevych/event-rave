import { ChangeEvent, useEffect, useState } from 'react';
import { Input } from '../../../../shared/ui/input/Input';
import styles from './Search.module.css';
import { FiSearch, FiX } from 'react-icons/fi';

type SearchProps = {
  query: string;
  setQuery: (value: string) => void;
  setShowResults: (value: boolean) => void;
  className?: string;
};
export const Search = ({
  query,
  setQuery,
  setShowResults,
  className,
}: SearchProps) => {
  const placeholders = ['concerts', 'museums', 'festivals'];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIndex((prev) => (prev + 1) % placeholders.length);
    }, 2000);
    return () => clearTimeout(timeout);
  }, [index]);

  const handleType = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    setShowResults(true);
  };

  return (
    <div className={styles['input-wrapper']}>
      <FiSearch className={styles['search-icon']} />
      <Input
        className={`${styles.input} ${className}`}
        value={query}
        onChange={handleType}
        onFocus={() => setShowResults(true)}
      />
      {query && (
        <button className={styles['clear-button']} onClick={() => setQuery('')}>
          <FiX />
        </button>
      )}
      {query === '' && (
        <span key={index} className={styles.placeholder}>
          Search for{' '}
          <span className={styles.changeable}> {placeholders[index]}</span>
        </span>
      )}
    </div>
  );
};
