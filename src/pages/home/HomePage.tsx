import { EventsSection } from '../../components/events-section/EventsSection';
import { Hero } from '../../components/hero/Hero';
import { SearchSection } from '../../features/search/SearchSection';
import { useWindowSize } from '../../hooks/useWindowSize';
import { Footer } from '../../layouts/footer/Footer';
import { Header } from '../../layouts/header/Header';
import styles from './HomePage.module.css';

export const HomePage = () => {
  const { width } = useWindowSize();
  const isMobile = width <= 768;
  return (
    <div className={styles.wrapper}>
      <Header />
      <main className={styles.main}>
        {isMobile ? <SearchSection /> : <Hero />}
        <EventsSection />
      </main>
      <Footer />
    </div>
  );
};
