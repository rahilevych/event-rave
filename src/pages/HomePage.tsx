import { EventsSection } from '../features/event/components/events-section/EventsSection';
import { Hero } from '../features/home/components/hero/Hero';
import { Footer } from '../layouts/footer/Footer';
import { Header } from '../layouts/header/Header';
import styles from '../features/home/styles/HomePage.module.css';
import { useCategoryStore } from '../features/category/model/CategoryStore';
import { useEffect } from 'react';
import { EventSectionSkeleton } from '../features/event/components/events-section/EventSectionSkeleton';
import { ErrorState } from '../shared/ui/error-state/ErrorState';

export const HomePage = () => {
  const categories = useCategoryStore((state) => state.categories);
  const getCategories = useCategoryStore((state) => state.getCategories);
  const error = useCategoryStore((state) => state.error);
  const loading = useCategoryStore((state) => state.loading);

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <main className={styles.main}>
        <Hero />

        <section className={styles.section}>
          {loading ? (
            [...Array(3)].map((_, i) => <EventSectionSkeleton key={i} />)
          ) : error ? (
            <ErrorState errorNotification={error} />
          ) : (
            categories?.map((category) => (
              <EventsSection
                key={category.id}
                title={category.name}
                categoryId={category.id}
              />
            ))
          )}
        </section>
      </main>
      <Footer />
    </div>
  );
};
