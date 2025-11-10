import { create } from 'zustand';
import EventService from '../service/EventService';
import { EventType } from './types';

interface GetEventsParams {
  categoryId?: number;
  searchText?: string;
}

interface EventState {
  eventsByCategory: Record<number, EventType[]>;
  loading: boolean;
  getEvent: (id: number) => Promise<void>;
  getEvents: (params?: GetEventsParams) => Promise<void>;
  createEvent: (event: EventType) => Promise<EventType>;
  updateEvent: (id: number, event: EventType) => Promise<EventType>;
  deleteEvent: (id: number) => Promise<EventType>;
  error: string;
  event: EventType | null;
}

export const useEventStore = create<EventState>((set) => ({
  loading: false,
  eventsByCategory: {},
  error: '',
  event: null,
  getEvent: async (id: number) => {
    set({ loading: true, error: '' });
    try {
      const response = await EventService.getEvent(id);
      set({ event: response.data });
    } catch (error) {
      set({ error: 'Failed to get event' });
      console.error('Error fetching events:', error);
    } finally {
      set({ loading: false });
    }
  },
  getEvents: async ({ categoryId, searchText }: GetEventsParams = {}) => {
    set({ loading: true, error: '' });
    try {
      const response = await EventService.getEvents({ categoryId, searchText });
      const sorted = [...response.data].sort(
        (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
      );
      if (categoryId !== undefined) {
        set((state) => ({
          eventsByCategory: { ...state.eventsByCategory, [categoryId]: sorted },
        }));
      } else {
        set((state) => ({
          eventsByCategory: { ...state.eventsByCategory, 0: sorted },
        }));
      }
    } catch (error) {
      set({ error: 'Failed to load events' });
      console.error('Error fetching events:', error);
    } finally {
      set({ loading: false });
    }
  },
  createEvent: async (event: EventType) => {
    set({ error: '' });
    try {
      const response = await EventService.createEvent(event);
      return response.data;
    } catch (error) {
      set({ error: 'Failed to create event' });
      console.error('Error creating events:', error);
    }
  },
  updateEvent: async (id: number, event: EventType) => {
    set({ error: '' });
    try {
      const response = await EventService.updateEvent(id, event);
      return response.data;
    } catch (error) {
      set({ error: 'Failed to update event' });
      console.error('Error updating events:', error);
    }
  },
  deleteEvent: async (id: number) => {
    set({ error: '' });
    try {
      const response = await EventService.deleteEvent(id);
      return response.data;
    } catch (error) {
      set({ error: 'Failed to delete event' });
      console.error('Error deleting events:', error);
    }
  },
}));
