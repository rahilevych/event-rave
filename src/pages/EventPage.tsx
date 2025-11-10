import { useParams } from 'react-router-dom';
import { Header } from '../layouts/header/Header';
import { Footer } from '../layouts/footer/Footer';
import styles from '../features/event/styles/EventPage.module.css';
import { useEffect } from 'react';
import { useEventStore } from '../features/event/model/EventStore';
import { EventDetailed } from '../features/event/components/event-detailed/EventDetailed';
import { EventPayment } from '../features/event/components/event-payment/EventPayment';
import { EventDetailedSkeleton } from '../features/event/components/event-detailed/EventDetailedSkeleton';
import { EventPaymentSkeleton } from '../features/event/components/event-payment/EventPaymentSkeleton';

export const EventPage = () => {
  const { id } = useParams();
  const parsedId = Number(id);
  const getEvent = useEventStore((state) => state.getEvent);
  const event = useEventStore((state) => state.event);

  useEffect(() => {
    getEvent(parsedId);
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <main className={styles.main}>
        <div className={'container'}>
          <div className={styles.info}>
            {!event ? (
              <>
                {' '}
                <EventDetailedSkeleton />
                <EventPaymentSkeleton />
              </>
            ) : (
              <>
                {' '}
                <EventDetailed event={event} />
                <EventPayment event={event} />
              </>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};
