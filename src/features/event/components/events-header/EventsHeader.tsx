import { useEffect, useState } from 'react';
import { useCategoryStore } from '../../../category/model/CategoryStore';
import { useFetch } from '../../../../shared/hooks/useFetch';
import { Category } from '../../../category/model/types';
import styles from './EventsHeader.module.css';
interface EventsHeaderProps {
  categoryId: number;
}
export const EventsHeader = ({ categoryId }: EventsHeaderProps) => {
  const [category, setCategory] = useState<Category | null>(null);
  const getCategory = useCategoryStore((state) => state.getCategory);
  const { execute } = useFetch(getCategory);

  useEffect(() => {
    execute(categoryId).then((res: Category) => setCategory(res));
  }, [execute, categoryId]);

  return (
    <section className={styles.header}>
      <h2 className={styles.title}>{category?.name} events</h2>
      <p className={styles.description}>{category?.description}</p>
    </section>
  );
};
