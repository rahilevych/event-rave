import { useState } from 'react';

import styles from './EventSection.module.css';

import { category, days, events, types } from '../data/events';
import { EventCard } from './EventCard';
import { Title } from '../../../../shared/ui/title/Title';
import { Dropdown } from '../../../../shared/ui/dropdown/Dropdown';

export const EventsSection = () => {
  const title = 'Upcoming events';
  const [searchParams, setSearchParams] = useState({
    day: 'Weekdays',
    type: 'Event type',
    category: 'Any category',
  });

  const handleDropdownChange = (key: string, value: string) => {
    setSearchParams((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return (
    <div className={`container ${styles.events}`}>
      <header className={styles.header}>
        <Title text={title} />
        <div className={styles.dropdowns}>
          <Dropdown
            className={styles.dropdown}
            label={searchParams.type}
            items={types}
            onSelect={(value) => handleDropdownChange('type', value)}
          />
          <Dropdown
            className={styles.dropdown}
            label={searchParams.day}
            items={days}
            onSelect={(value) => handleDropdownChange('type', value)}
          />
          <Dropdown
            className={styles.dropdown}
            label={searchParams.category}
            items={category}
            onSelect={(value) => handleDropdownChange('type', value)}
          />
        </div>
      </header>
      <main>
        {events === null ? (
          <p>Something went wrong. Try again later !</p>
        ) : events.length === 0 ? (
          <p>There are no events</p>
        ) : (
          <div className={styles.cards}>
            {events.map((event, index) => (
              <EventCard card={event} key={index} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
};
