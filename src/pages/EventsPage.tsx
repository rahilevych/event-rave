import styles from '../features/event/styles/EventsPage.module.css';
import { Header } from '../layouts/header/Header';
import { Footer } from '../layouts/footer/Footer';
import { FiltersSection } from '../features/event/components/filters/FiltersSection';
import { EventsList } from '../features/event/components/events-list/EventsList';
import { useParams } from 'react-router-dom';
import { EventsHeader } from '../features/event/components/events-header/EventsHeader';
import { useState } from 'react';

import { FilterKey } from '../features/event/constants/constatnts';
import { CalendarModal } from '../features/event/components/calendar-modal/CalendarModal';
import { useEvents } from '../features/event/hooks/useEvents';

export const EventsPage = () => {
  const [activeFilter, setActiveFilter] = useState<FilterKey | 'all'>('all');
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const { categoryId } = useParams();
  const parsedCategoryId = Number(categoryId);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const { data: events, isLoading } = useEvents({
    categoryId: parsedCategoryId,
  });

  if (isLoading) return <p>loading</p>;

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
            <EventsList loading={isLoading} events={events} />
          </div>
        </main>

        <Footer />
      </div>
    )
  );
};
