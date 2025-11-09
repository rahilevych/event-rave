import { useRef } from 'react';
import { DayPicker } from 'react-day-picker';
import { useWindowSize } from '../../../../shared/hooks/useWindowSize';
import { useClickOutside } from '../../../../shared/hooks/useClickOutside';
import styles from './CalendarModal.module.css';
import { FiX } from 'react-icons/fi';

interface CalendarModalProps {
  selectedDate: Date | null;
  onSelectDate: (date: Date | null) => void;
  onClose: () => void;
}

export const CalendarModal = ({
  selectedDate,
  onSelectDate,
  onClose,
}: CalendarModalProps) => {
  const modalRef = useRef<HTMLDivElement | null>(null);
  const { width } = useWindowSize();
  const monthsShown = width < 768 ? 1 : 2;

  useClickOutside(modalRef, onClose);

  return (
    <div className={styles.overlay}>
      <div ref={modalRef} className={styles.modal}>
        <div className={styles.nav}>
          <p>Date</p>
          <FiX className={styles.icon} onClick={onClose} />
        </div>
        <div className={styles.picker}>
          <DayPicker
            mode="single"
            selected={selectedDate ?? undefined}
            onSelect={(date) => onSelectDate(date ?? null)}
            numberOfMonths={monthsShown}
            pagedNavigation
            startMonth={new Date()}
          />
        </div>
      </div>
    </div>
  );
};
