import { create } from 'zustand';
import EventService from '../service/EventService';
import { EventType } from './types';

interface GetEventsParams {
  categoryId?: number;
  searchText?: string;
}

interface EventState {
  getEvent: (id: number) => Promise<EventType>;
  getEvents: (params?: GetEventsParams) => Promise<EventType[]>;
  createEvent: (event: EventType) => Promise<EventType>;
  updateEvent: (id: number, event: EventType) => Promise<EventType>;
  deleteEvent: (id: number) => Promise<EventType>;
  error: string;
}

export const useEventStore = create<EventState>((set) => ({
  error: '',
  getEvent: async (id: number) => {
    set({ error: '' });
    try {
      const response = await EventService.getEvent(id);
      return response.data;
    } catch (error) {
      set({ error: 'Failed to get event' });
      console.error('Error fetching events:', error);
    }
  },
  getEvents: async ({ categoryId, searchText }: GetEventsParams = {}) => {
    set({ error: '' });
    try {
      const response = await EventService.getEvents({ categoryId, searchText });
      return response.data;
    } catch (error) {
      set({ error: 'Failed to load events' });
      console.error('Error fetching events:', error);
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
