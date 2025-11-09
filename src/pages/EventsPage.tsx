import styles from '../features/event/styles/EventsPage.module.css';
import { Header } from '../layouts/header/Header';
import { Footer } from '../layouts/footer/Footer';
import { FiltersSection } from '../features/event/components/filters/FiltersSection';
import { EventsList } from '../features/event/components/events-list/EventsList';
import { useParams } from 'react-router-dom';
import { EventsHeader } from '../features/event/components/events-header/EventsHeader';
import { useFetch } from '../shared/hooks/useFetch';
import { useEventStore } from '../features/event/model/EventStore';
import { useEffect, useMemo, useState } from 'react';
import { EventType } from '../features/event/model/types';
import { filterEvents } from '../shared/lib/filterEvents';
import { FilterKey } from '../features/event/constants/constatnts';
import { CalendarModal } from '../features/event/components/calendar-modal/CalendarModal';

export const EventsPage = () => {
  const [activeFilter, setActiveFilter] = useState<FilterKey | 'all'>('all');
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const { categoryId } = useParams();
  const parsedCategoryId = Number(categoryId);
  const [events, setEvents] = useState<EventType[] | []>([]);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const getEvents = useEventStore((state) => state.getEvents);
  const { execute } = useFetch(getEvents);

  useEffect(() => {
    execute({ categoryId: parsedCategoryId }).then((res: EventType[]) => {
      if (!res) return;

      const sorted = [...res].sort(
        (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
      );
      setEvents(sorted);
    });
  }, [execute]);

  const filteredEvents = useMemo(
    () => filterEvents(events, activeFilter, selectedDate),
    [events, activeFilter, selectedDate],
  );

  return (
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
          <EventsList events={filteredEvents} />
        </div>
      </main>

      <Footer />
    </div>
  );
};
