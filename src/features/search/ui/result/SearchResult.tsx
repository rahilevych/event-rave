import { useNavigate } from 'react-router-dom';
import { EventType } from '../../../event/model/types';
import { ResultItem } from '../result-item/ResultItem';
import styles from './SearchResult.module.css';
import { ResultItemSkeleton } from '../result-item/ResultItemSkeleton';
import { MdSearchOff } from 'react-icons/md';
import { SeeAllSection } from '../../components/see-all/SeeAllSection';

type SearchResultProps = {
  results: EventType[];
  loading?: boolean;
};
export const SearchResult = ({ results, loading }: SearchResultProps) => {
  const navigate = useNavigate();

  return (
    <div className={styles.results}>
      {loading ? (
        <ul className={styles.list}>
          {[...Array(5)].map((_, i) => (
            <li key={i}>
              <ResultItemSkeleton />
            </li>
          ))}
        </ul>
      ) : results.length > 0 ? (
        <div>
          <SeeAllSection />

          <ul className={styles.list}>
            {results.map((event) => (
              <li key={event.id} onClick={() => navigate(`/event/${event.id}`)}>
                <ResultItem event={event} />
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p className={styles.empty}>
          <MdSearchOff className={styles.icon} /> No results found
        </p>
      )}
    </div>
  );
};
