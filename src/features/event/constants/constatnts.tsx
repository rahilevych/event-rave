import { ReactNode } from 'react';
import { MdEditCalendar } from 'react-icons/md';

export type FilterKey =
  | 'calendar'
  | 'today'
  | 'week'
  | 'month'
  | 'tomorrow'
  | 'all';

export interface IFilter {
  key: FilterKey;
  label: string;
  icon?: ReactNode;
}
export const filters: IFilter[] = [
  { key: 'calendar', label: 'Date', icon: <MdEditCalendar /> },
  { key: 'today', label: 'Today' },
  { key: 'tomorrow', label: 'Tomorrow' },
  { key: 'week', label: 'This week' },
  { key: 'month', label: 'This month' },
];
