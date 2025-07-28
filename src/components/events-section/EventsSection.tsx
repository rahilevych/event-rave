import { useState } from 'react';
import { Title } from '../ui/title/Title';
import styles from './EventSection.module.css';
import { Dropdown } from '../../features/search/ui/dropdown/Dropdown';
import { category, days, events, types } from '../data/events';
import { EventCard } from './EventCard';

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
        <div className={styles.cards}>
          {' '}
          {events.map((event, index) => (
            <EventCard card={event} key={index} />
          ))}
        </div>
      </main>
    </div>
  );
};
