import { useRef, useState } from 'react';
import styles from './SearchSection.module.css';
import { mockEvents } from '../../data/results';
import { useClickOutside } from '../../../../shared/hooks/useClickOutside';

import { SearchResult } from '../../ui/result/SearchResult';
import { Search } from '../../ui/search/Search';
export const SearchSection = () => {
  const [query, setQuery] = useState('');
  const [showResults, setShowResults] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const filtered = mockEvents.filter((event) =>
    event.toLocaleLowerCase().includes(query.toLocaleLowerCase()),
  );
  useClickOutside(sectionRef, () => setShowResults(false));
  return (
    <div className={styles['search-section']} ref={sectionRef}>
      <Search
        query={query}
        setQuery={setQuery}
        setShowResults={setShowResults}
      />
      {showResults && query && <SearchResult results={filtered} />}
    </div>
  );
};
