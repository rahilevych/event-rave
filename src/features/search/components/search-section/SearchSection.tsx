import { useEffect, useRef, useState } from 'react';
import styles from './SearchSection.module.css';

import { useClickOutside } from '../../../../shared/hooks/useClickOutside';

import { SearchResult } from '../../ui/result/SearchResult';
import { Search } from '../../ui/search/Search';
import { createPortal } from 'react-dom';

import { useEventStore } from '../../../event/model/EventStore';

export const SearchSection = () => {
  const [query, setQuery] = useState('');
  const [showResults, setShowResults] = useState(false);

  const sectionRef = useRef<HTMLDivElement>(null);
  const getEvents = useEventStore((state) => state.getEvents);
  const loading = useEventStore((state) => state.loading);
  const eventsByCategory = useEventStore((state) => state.eventsByCategory);
  const events = eventsByCategory[0] || [];

  useClickOutside(sectionRef, () => setShowResults(false));

  useEffect(() => {
    const handler = setTimeout(() => {
      getEvents({ searchText: query });
    }, 500);

    return () => clearTimeout(handler);
  }, [query]);

  return (
    <>
      {query &&
        createPortal(
          <div
            className={styles.overlay}
            onClick={() => setShowResults(false)}
          />,
          document.body,
        )}
      <div className={styles['search-section']} ref={sectionRef}>
        <Search
          query={query}
          setQuery={setQuery}
          setShowResults={setShowResults}
        />
        {showResults && query && (
          <SearchResult loading={loading} results={events} />
        )}
      </div>
    </>
  );
};
