import { EventsSection } from '../features/event/components/events-section/EventsSection';
import { Hero } from '../features/home/components/hero/Hero';
import { Footer } from '../layouts/footer/Footer';
import { Header } from '../layouts/header/Header';
import styles from '../features/home/styles/HomePage.module.css';
import { useCategories } from '../features/category/hooks/useCategories';
import { Loader } from '../shared/ui/loader/Loader';
import { ErrorState } from '../shared/ui/error-state/ErrorState';

export const HomePage = () => {
  const { data: categories, isError, isLoading } = useCategories();

  if (isLoading)
    return (
      <div className={styles.loader}>
        <Loader />
      </div>
    );
  console.log(isError);
  return (
    <div className="wrapper">
      <Header />
      <main className={styles.main}>
        <Hero />
        <section className={styles.section}>
          {isError ? (
            <ErrorState errorNotification="Fail to load events. Try again later" />
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
