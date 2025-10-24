import { useEffect, useRef, useState } from 'react';
import styles from './SearchSection.module.css';

import { useClickOutside } from '../../../../shared/hooks/useClickOutside';

import { SearchResult } from '../../ui/result/SearchResult';
import { Search } from '../../ui/search/Search';
import { createPortal } from 'react-dom';
import { useFetch } from '../../../../shared/hooks/useFetch';
import { useEventStore } from '../../../event/model/EventStore';
import { EventType } from '../../../event/model/types';

export const SearchSection = () => {
  const [query, setQuery] = useState('');
  const [showResults, setShowResults] = useState(false);
  const [results, setResults] = useState<EventType[] | []>([]);
  const sectionRef = useRef<HTMLDivElement>(null);
  const getEvents = useEventStore((state) => state.getEvents);
  const { execute } = useFetch(getEvents);

  useClickOutside(sectionRef, () => setShowResults(false));

  useEffect(() => {
    const handler = setTimeout(() => {
      if (query) {
        execute({ searchText: query }).then((res: EventType[]) =>
          setResults(res || []),
        );
      } else {
        setResults([]);
      }
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
        {showResults && query && <SearchResult results={results} />}
      </div>
    </>
  );
};
