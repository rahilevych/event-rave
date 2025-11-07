import { FilterKey } from '../../features/event/constants/constatnts';
import { EventType } from '../../features/event/model/types';

export const filterEvents = (
  events: EventType[],
  activeFilter: FilterKey | 'all',
  selectedDate: Date | null,
): EventType[] => {
  if (activeFilter === 'all') return events;
  const today = new Date();

  return events.filter((event) => {
    const eventDate = new Date(event.date);

    switch (activeFilter) {
      case 'today':
        return eventDate.toDateString() === today.toDateString();

      case 'tomorrow': {
        const tomorrow = new Date();
        tomorrow.setDate(today.getDate() + 1);
        return eventDate.toDateString() === tomorrow.toDateString();
      }

      case 'week': {
        const weekStart = new Date(today);
        weekStart.setDate(today.getDate() - today.getDay());
        const weekEnd = new Date(weekStart);
        weekEnd.setDate(weekStart.getDate() + 6);
        return eventDate >= weekStart && eventDate <= weekEnd;
      }

      case 'month':
        return (
          eventDate.getMonth() === today.getMonth() &&
          eventDate.getFullYear() === today.getFullYear()
        );

      case 'calendar':
        return selectedDate
          ? eventDate.toDateString() === selectedDate.toDateString()
          : true;

      default:
        return true;
    }
  });
};
