import { EventsSection } from '../features/event/components/events-section/EventsSection';
import { Hero } from '../features/home/components/hero/Hero';
import { Footer } from '../layouts/footer/Footer';
import { Header } from '../layouts/header/Header';
import styles from '../features/home/styles/HomePage.module.css';
import { useCategories } from '../features/category/hooks/useCategories';

export const HomePage = () => {
  const { data: categories } = useCategories();

  return (
    <div className="wrapper">
      <Header />
      <main className={styles.main}>
        <Hero />

        <section className={styles.section}>
          {categories?.map((category) => (
            <EventsSection
              key={category.id}
              title={category.name}
              categoryId={category.id}
            />
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
};
