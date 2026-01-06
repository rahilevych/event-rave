import { useRef, useState } from 'react';
import styles from './SearchSection.module.css';

import { useClickOutside } from '../../../../shared/hooks/useClickOutside';
import { SearchResult } from '../../ui/result/SearchResult';
import { Search } from '../../ui/search/Search';
import { createPortal } from 'react-dom';
import { useEvents } from '../../../event/hooks/useEvents';
import { EventType } from '../../../event/model/types';
import { useSearchStore } from '../../model/SearchStore';
import { useLocation } from 'react-router-dom';

export const SearchSection = () => {
  const location = useLocation();
  const isSearchPage = location.pathname === '/search';
  const query = useSearchStore((state) => state.query);
  const [showResults, setShowResults] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { data, isLoading } = useEvents({ searchText: query, limit: 5 });
  const events: EventType[] = data?.pages.flat() ?? [];

  useClickOutside(sectionRef, () => setShowResults(false));

  return (
    <>
      {!isSearchPage &&
        query &&
        showResults &&
        createPortal(
          <div
            className={styles.overlay}
            onClick={() => setShowResults(false)}
          />,
          document.body,
        )}
      <div className={styles['search-section']} ref={sectionRef}>
        <Search setShowResults={setShowResults} />
        {!isSearchPage && showResults && query && (
          <SearchResult loading={isLoading} results={events ?? []} />
        )}
      </div>
    </>
  );
};
