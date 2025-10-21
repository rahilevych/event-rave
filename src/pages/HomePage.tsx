import { EventsSection } from '../features/event/components/events-section/EventsSection';
import { Hero } from '../features/home/components/hero/Hero';
import { Footer } from '../layouts/footer/Footer';
import { Header } from '../layouts/header/Header';

import styles from '../features/home/styles/HomePage.module.css';
import { useCategoryStore } from '../features/category/model/CategoryStore';
import { useEffect } from 'react';
export const HomePage = () => {
  const categories = useCategoryStore((state) => state.categories);
  const getCategories = useCategoryStore((state) => state.getCategories);
  useEffect(() => {
    getCategories();
  }, []);
  return (
    <div className="wrapper">
      <Header />
      <main className={styles.main}>
        <Hero />
        <section className={styles.section}>
          {categories.map((category) => (
            <EventsSection title={category.name} categoryId={category.id} />
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
};
