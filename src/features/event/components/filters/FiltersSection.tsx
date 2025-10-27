import { filters } from '../../constants/constatnts';
import { DateBtn } from '../../ui/date-btn/DateBtn';
import styles from './FiltersSection.module.css';

export const FiltersSection = () => {
  return (
    <section className={styles.filters}>
      <div className={styles['date-buttons']}>
        {filters.map((filter) => (
          <DateBtn>
            {filter.icon}
            {filter.label}
          </DateBtn>
        ))}
      </div>
    </section>
  );
};
