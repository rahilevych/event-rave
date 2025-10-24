import { EventsSection } from '../features/event/components/events-section/EventsSection';
import { Hero } from '../features/home/components/hero/Hero';
import { Footer } from '../layouts/footer/Footer';
import { Header } from '../layouts/header/Header';

import styles from '../features/home/styles/HomePage.module.css';
import { useCategoryStore } from '../features/category/model/CategoryStore';

import { useFetch } from '../shared/hooks/useFetch';
import { Loader } from '../shared/ui/loader/Loader';
import { ErrorState } from '../shared/ui/error-state/ErrorState';
import { EmptyState } from '../shared/ui/empty-state/EmptyState';
import { Category } from '../features/category/model/types';
import { useEffect } from 'react';
export const HomePage = () => {
  const getCategories = useCategoryStore((state) => state.getCategories);
  const {
    error,
    loading,
    data: categories,
    execute,
  } = useFetch<Category[]>(getCategories);

  useEffect(() => {
    execute();
  }, [execute]);

  return (
    <div className="wrapper">
      <Header />
      <main className={styles.main}>
        <Hero />

        {loading ? (
          <Loader />
        ) : error ? (
          <ErrorState />
        ) : !categories?.length ? (
          <EmptyState dataName="categories" />
        ) : (
          <section className={styles.section}>
            {categories.map((category) => (
              <EventsSection
                key={category.id}
                title={category.name}
                categoryId={category.id}
              />
            ))}
          </section>
        )}
      </main>
      <Footer />
    </div>
  );
};
