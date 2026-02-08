import { EventsSection } from '../features/event/components/events-section/EventsSection';
import { Hero } from '../features/home/components/hero/Hero';
import { Footer } from '../layouts/footer/Footer';
import { Header } from '../layouts/header/Header';
import styles from '../features/home/styles/HomePage.module.css';
import { useCategories } from '../features/category/hooks/useCategories';
import { ErrorState } from '../shared/ui/error-state/ErrorState';
import { LazyLoader } from '../shared/ui/loader/LazyLoader';
import { useInfiniteScroll } from '../shared/hooks/useInfiniteScroll';
import { useRef } from 'react';

export const HomePage = () => {
  const {
    data: categories,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isError,
  } = useCategories(1);

  const loadMoreRef = useRef<HTMLDivElement | null>(null);

  useInfiniteScroll({
    ref: loadMoreRef,
    fetchNextPage: fetchNextPage,
    hasNextPage: hasNextPage && !isFetchingNextPage,
  });

  // if (isLoading)
  //   return (
  //     <div className={styles.loader}>
  //       <Loader />
  //     </div>
  //   );

  return (
    <div className="wrapper">
      <Header />
      <main className={styles.main}>
        <Hero />

        <section className={styles.section}>
          {isError ? (
            <ErrorState errorNotification="Fail to load events. Try again later" />
          ) : (
            categories?.pages.map((page) =>
              page.map((category) => (
                <EventsSection
                  key={category.id}
                  title={category.name}
                  categoryId={category.id}
                />
              )),
            )
          )}
          {hasNextPage && <div ref={loadMoreRef} style={{ height: 1 }} />}

          {isFetchingNextPage && <LazyLoader />}
        </section>
      </main>
      <Footer />
    </div>
  );
};
