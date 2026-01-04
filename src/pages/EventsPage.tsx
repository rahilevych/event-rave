import styles from '../features/event/styles/EventsPage.module.css';
import { Header } from '../layouts/header/Header';
import { Footer } from '../layouts/footer/Footer';
import { FiltersSection } from '../features/event/components/filters/FiltersSection';
import { EventsList } from '../features/event/components/events-list/EventsList';
import { useParams } from 'react-router-dom';
import { EventsHeader } from '../features/event/components/events-header/EventsHeader';
import { useRef, useState } from 'react';

import { FilterKey } from '../features/event/constants/constatnts';
import { CalendarModal } from '../features/event/components/calendar-modal/CalendarModal';
import { useEvents } from '../features/event/hooks/useEvents';
import { useInfiniteScroll } from '../shared/hooks/useInfiniteScroll';
import { Loader } from '../shared/ui/loader/Loader';
import { EventType } from '../features/event/model/types';

export const EventsPage = () => {
  const [activeFilter, setActiveFilter] = useState<FilterKey | 'all'>('all');
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const { categoryId } = useParams();
  const parsedCategoryId = Number(categoryId);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const { data, fetchNextPage, isFetchingNextPage, hasNextPage, isLoading } =
    useEvents({
      categoryId: parsedCategoryId,
      limit: 10,
    });
  const events: EventType[] = data?.pages.flat() ?? [];

  const loadMoreRef = useRef<HTMLDivElement | null>(null);

  useInfiniteScroll({
    ref: loadMoreRef,
    fetchNextPage: fetchNextPage,
    hasNextPage: hasNextPage && !isFetchingNextPage,
  });

  if (isLoading)
    return (
      <div className={styles.loader}>
        <Loader />
      </div>
    );

  return (
    events && (
      <div className="wrapper">
        <Header />
        <main className={styles.main}>
          <div className="container">
            <EventsHeader categoryId={parsedCategoryId} />
            <FiltersSection
              activeFilter={activeFilter}
              setActiveFilter={setActiveFilter}
              onCalendarClick={() => setIsCalendarOpen(true)}
              selectedDate={selectedDate}
              setSelectedDate={setSelectedDate}
            />
            {isCalendarOpen && (
              <CalendarModal
                selectedDate={selectedDate}
                onSelectDate={(date) => {
                  setSelectedDate(date);
                  setActiveFilter('calendar');
                  setIsCalendarOpen(false);
                }}
                onClose={() => {
                  setIsCalendarOpen(false);
                }}
              />
            )}
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
