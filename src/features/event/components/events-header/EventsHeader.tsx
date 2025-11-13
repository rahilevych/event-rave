import styles from './EventsHeader.module.css';
import { EventsHeaderSkeleton } from './EventsHeaderSkeleton';
import { useCategory } from '../../../category/hooks/useCategories';
import { BackBtn } from '../../../../shared/ui/back-btn/BackBtn';

interface EventsHeaderProps {
  categoryId: number;
}
export const EventsHeader = ({ categoryId }: EventsHeaderProps) => {
  const { data: category, isLoading } = useCategory(categoryId);
  if (isLoading) return <EventsHeaderSkeleton />;
  return (
    <section className={styles.header}>
      <div>
        {' '}
        <BackBtn />
        <h2 className={styles.title}>{category?.name} events</h2>
      </div>

      <p className={styles.description}>{category?.description}</p>
    </section>
  );
};
