import { useParams } from 'react-router-dom';
import { Header } from '../layouts/header/Header';
import { Footer } from '../layouts/footer/Footer';
import styles from '../features/event/styles/EventPage.module.css';
import { useEffect, useState } from 'react';

import { useEventStore } from '../features/event/model/EventStore';
import { useFetch } from '../shared/hooks/useFetch';
import { EventType } from '../features/event/model/types';
import { EventDetailed } from '../features/event/components/event-detailed/EventDetailed';
import { EventPayment } from '../features/event/components/event-payment/EventPayment';
export const EventPage = () => {
  const { id } = useParams();
  const parsedId = Number(id);
  const [event, setEvent] = useState<EventType | null>(null);
  const getEvent = useEventStore((state) => state.getEvent);
  const { execute } = useFetch(getEvent);

  useEffect(() => {
    execute(parsedId).then((res: EventType) => setEvent(res || null));
  }, [execute, parsedId]);

  return (
    <div className="wrapper">
      <Header />
      <main className={styles.main}>
        <div className={'container'}>
          <div className={styles.info}>
            <EventDetailed event={event} />
            <EventPayment />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};
