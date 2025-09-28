import 'swiper/css';

import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { EventCard } from '../../ui/card/EventCard';
import styles from './EventSlider.module.css';
import { Event } from '../../../../shared/types/types';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

type EventSliderProps = {
  events: Event[];
};

export const EventSlider = ({ events }: EventSliderProps) => {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  return (
    <div className={styles.wrapper}>
      <button
        ref={prevRef}
        className={`${styles.prev} ${isBeginning ? styles.hidden : ''}`}
      >
        <MdChevronLeft />
      </button>
      <button
        ref={nextRef}
        className={`${styles.next} ${isEnd ? styles.hidden : ''}`}
      >
        <MdChevronRight />
      </button>

      <Swiper
        modules={[Navigation]}
        onBeforeInit={(swiper) => {
          // @ts-ignore
          swiper.params.navigation.prevEl = prevRef.current;
          // @ts-ignore
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        onSlideChange={(swiper) => {
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        spaceBetween={24}
        slidesPerView={'auto'}
        centeredSlides={false}
        grabCursor={true}
      >
        {events.map((event, index) => (
          <SwiperSlide key={index} style={{ width: 'auto' }}>
            <EventCard card={event} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
