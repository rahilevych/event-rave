import { EventsSection } from '../features/event/components/events-section/EventsSection';
import { Hero } from '../features/home/components/hero/Hero';
import { Footer } from '../layouts/footer/Footer';
import { Header } from '../layouts/header/Header';

import styles from '../features/home/styles/HomePage.module.css';
export const HomePage = () => {
  return (
    <div className="wrapper">
      <Header />
      <main className={styles.main}>
        <Hero />
        <section className={styles.section}>
          <EventsSection title="Upcoming Events" />
          <EventsSection title="Berlin Events" />
          <EventsSection title="Next Month Events" />
        </section>
      </main>
      <Footer />
    </div>
  );
};
