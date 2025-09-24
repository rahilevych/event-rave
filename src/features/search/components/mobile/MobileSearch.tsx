import { MdChevronLeft } from 'react-icons/md';
import { SearchSection } from '../search-section/SearchSection';
import styles from './MobileSearch.module.css';
type MobileSearchProps = {
  isSearchOpened: boolean;
  setIsSearchOpened: (value: boolean) => void;
};
const MobileSearch = ({
  isSearchOpened,
  setIsSearchOpened,
}: MobileSearchProps) => {
  return (
    <div className={styles['mobile-search']}>
      {isSearchOpened && (
        <div className={styles.search}>
          <button onClick={() => setIsSearchOpened(false)}>
            <MdChevronLeft className={styles.icon} />
          </button>{' '}
          <SearchSection />
        </div>
      )}
    </div>
  );
};

export default MobileSearch;
