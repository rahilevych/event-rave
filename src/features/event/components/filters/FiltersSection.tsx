import { converDate } from '../../../../shared/lib/convertDate';
import { FilterKey, filters } from '../../constants/constatnts';
import { DateBtn } from '../../ui/date-btn/DateBtn';
import styles from './FiltersSection.module.css';
import 'react-datepicker/dist/react-datepicker.css';

interface FiltersSectionProps {
  activeFilter: FilterKey;
  setActiveFilter: (key: FilterKey) => void;
  onCalendarClick: () => void;
  selectedDate: Date | null;
  setSelectedDate: (date: Date | null) => void;
}
export const FiltersSection = ({
  activeFilter,
  setActiveFilter,
  onCalendarClick,
  selectedDate,
  setSelectedDate,
}: FiltersSectionProps) => {
  const handleFilterClick = (key: FilterKey) => {
    if (key === 'calendar') {
      onCalendarClick?.();
      return;
    }
    setActiveFilter(key);
    setSelectedDate(null);
  };

  return (
    <section className={styles.filters}>
      <div className={styles['date-buttons']}>
        {filters.map((filter) => (
          <DateBtn
            key={filter.key}
            isActive={activeFilter === filter.key}
            onClick={() => handleFilterClick(filter.key)}
            onClear={() => {
              setActiveFilter('all');
              setSelectedDate(null);
            }}
          >
            {filter.icon}
            {filter.key === 'calendar' && selectedDate
              ? converDate(selectedDate.toString())
              : filter.label}
          </DateBtn>
        ))}
      </div>
    </section>
  );
};
