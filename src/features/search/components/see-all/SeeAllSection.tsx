import { MdChevronRight } from 'react-icons/md';
import styles from './SeeAllSection.module.css';
import { FiSearch } from 'react-icons/fi';
import { useSearchStore } from '../../model/SearchStore';
import { Link } from 'react-router-dom';

export const SeeAllSection = () => {
  const query = useSearchStore((state) => state.query);

  return (
    <div className={styles.container}>
      <span className={styles.icon}>
        <FiSearch className={styles['search-icon']} />
      </span>

      <div className={styles.info}>
        <p className={styles.query}> "{query}"</p>
        <Link to="/search" className={styles.navigation}>
          <p>See all events</p>
          <MdChevronRight />
        </Link>
      </div>
    </div>
  );
};
