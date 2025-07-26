import { useState } from 'react';
import styles from './SearchSection.module.css';
import { Dropdown } from './ui/dropdown/Dropdown';
import { FaSearch } from 'react-icons/fa';
import { dates, eventTypes, locations } from './data/data';
import { Button } from '../../components/ui/Button/Button';

export const SearchSection = () => {
  const [searchParams, setSearchParams] = useState({
    type: 'Choose event type',
    location: 'Choose location',
    date: 'Choose date and time',
  });

  const handleDropdownChange = (key: string, value: string) => {
    setSearchParams((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return (
    <section className={`container ${styles.search}`}>
      <div className={styles.content}>
        <div className={styles.dropdowns}>
          {' '}
          <div className={styles.params}>
            <span>Looking for</span>{' '}
            <Dropdown
              items={eventTypes}
              label={searchParams.type}
              onSelect={(value) => handleDropdownChange('type', value)}
            />
          </div>
          <div className={styles.params}>
            <span>Location</span>{' '}
            <Dropdown
              items={locations}
              label={searchParams.location}
              onSelect={(value) => handleDropdownChange('location', value)}
            />
          </div>
          <div className={styles.params}>
            <span>When</span>{' '}
            <Dropdown
              items={dates}
              label={searchParams.date}
              onSelect={(value) => handleDropdownChange('date', value)}
            />
          </div>
        </div>
        <Button className={styles.button}>
          Search <FaSearch />
        </Button>
      </div>
    </section>
  );
};
