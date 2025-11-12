import styles from './EventsHeader.module.css';
import { EventsHeaderSkeleton } from './EventsHeaderSkeleton';
import { useCategory } from '../../../category/hooks/useCategories';

interface EventsHeaderProps {
  categoryId: number;
}
export const EventsHeader = ({ categoryId }: EventsHeaderProps) => {
  const { data: category, isLoading } = useCategory(categoryId);
  if (isLoading) return <EventsHeaderSkeleton />;
  return (
    <section className={styles.header}>
      <h2 className={styles.title}>{category?.name} events</h2>
      <p className={styles.description}>{category?.description}</p>
    </section>
  );
};
