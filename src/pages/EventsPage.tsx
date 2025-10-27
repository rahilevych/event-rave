import styles from '../features/event/styles/EventsPage.module.css';
import { Header } from '../layouts/header/Header';
import { Footer } from '../layouts/footer/Footer';
import { FiltersSection } from '../features/event/components/filters/FiltersSection';
import { EventsList } from '../features/event/components/events-list/EventsList';
import { useParams } from 'react-router-dom';
import { EventsHeader } from '../features/event/components/events-header/EventsHeader';

export const EventsPage = () => {
  const { categoryId } = useParams();
  const parsedCategoryId = Number(categoryId);
  return (
    <div className="wrapper">
      <Header />
      <main className={styles.main}>
        <div className="container">
          <EventsHeader categoryId={parsedCategoryId} />
          <FiltersSection />
          <EventsList categoryId={parsedCategoryId} />
        </div>
      </main>

      <Footer />
    </div>
  );
};
