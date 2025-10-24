import { EventType } from '../../../event/model/types';
import { ResultItem } from '../result-item/ResultItem';
import styles from './SearchResult.module.css';
type SearchResultProps = {
  results: EventType[];
};
export const SearchResult = ({ results }: SearchResultProps) => {
  return (
    <ul className={styles.results}>
      {results.map((event, index) => (
        <li key={index}>
          <ResultItem event={event} />
        </li>
      ))}
    </ul>
  );
};
