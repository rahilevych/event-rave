import { Footer } from 'react-day-picker';
import { EventsList } from '../features/event/components/events-list/EventsList';

import { Header } from '../layouts/header/Header';
import { BackBtn } from '../shared/ui/back-btn/BackBtn';
import styles from '../features/search/styles/AllSearchResultsPage.module.css';
import { EventType } from '../features/event/model/types';
import { useEvents } from '../features/event/hooks/useEvents';
import { useSearchStore } from '../features/search/model/SearchStore';
import { useInfiniteScroll } from '../shared/hooks/useInfiniteScroll';
import { useRef } from 'react';

export const AllSearchResultsPage = () => {
  const query = useSearchStore((state) => state.query);
  const { data, fetchNextPage, isFetchingNextPage, hasNextPage, isLoading } =
    useEvents({
      limit: 10,
      searchText: query || undefined,
    });
  const events: EventType[] = data?.pages.flat() ?? [];
  const loadMoreRef = useRef<HTMLDivElement | null>(null);

  useInfiniteScroll({
    ref: loadMoreRef,
    fetchNextPage: fetchNextPage,
    hasNextPage: hasNextPage && !isFetchingNextPage,
  });

  return (
    events && (
      <div className="wrapper">
        <Header />
        <main className={styles.main}>
          <div className="container">
            <div className={styles.header}>
              <BackBtn />
              {query !== '' ? (
                <h2>Events for '{query}'</h2>
              ) : (
                <h2>All events</h2>
              )}
            </div>
            <EventsList
              loading={isLoading}
              loadingMore={isFetchingNextPage}
              events={events}
            />
            {hasNextPage && <div ref={loadMoreRef} style={{ height: 1 }} />}
          </div>
        </main>

        <Footer />
      </div>
    )
  );
};
