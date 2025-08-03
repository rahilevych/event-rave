import { EventsSection } from '../features/home/components/events-section/EventsSection';
import { Hero } from '../features/home/components/hero/Hero';
import { SearchSection } from '../features/search/SearchSection';
import { Footer } from '../layouts/footer/Footer';
import { Header } from '../layouts/header/Header';
import { useWindowSize } from '../shared/hooks/useWindowSize';

export const HomePage = () => {
  const { width } = useWindowSize();
  const isMobile = width <= 768;
  return (
    <div className="wrapper">
      <Header />
      <main className="main">
        {isMobile ? <SearchSection /> : <Hero />}
        <EventsSection />
      </main>
      <Footer />
    </div>
  );
};
