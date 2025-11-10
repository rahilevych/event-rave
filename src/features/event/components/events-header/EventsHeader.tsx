import { useEffect } from 'react';
import { useCategoryStore } from '../../../category/model/CategoryStore';

import styles from './EventsHeader.module.css';
import { EventsHeaderSkeleton } from './EventsHeaderSkeleton';

interface EventsHeaderProps {
  categoryId: number;
}
export const EventsHeader = ({ categoryId }: EventsHeaderProps) => {
  const getCategory = useCategoryStore((state) => state.getCategory);
  const category = useCategoryStore((state) => state.category);
  const loading = useCategoryStore((state) => state.loading);

  useEffect(() => {
    getCategory(categoryId);
  }, []);

  return loading ? (
    <EventsHeaderSkeleton />
  ) : (
    <section className={styles.header}>
      <h2 className={styles.title}>{category?.name} events</h2>
      <p className={styles.description}>{category?.description}</p>
    </section>
  );
};
