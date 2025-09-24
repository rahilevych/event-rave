import styles from './SearchResult.module.css';
type SearchResultProps = {
  results: string[];
};
export const SearchResult = ({ results }: SearchResultProps) => {
  return (
    <ul className={styles.results}>
      {results.map((event, index) => (
        <li key={index}>{event}</li>
      ))}
    </ul>
  );
};
