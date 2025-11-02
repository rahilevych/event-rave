import { create } from 'zustand';
import EventService from '../service/EventService';
import { EventType } from './types';

interface GetEventsParams {
  categoryId?: number;
  searchText?: string;
}

interface EventState {
  event: EventType | null;
  events: EventType[] | [];
  setEvent: (event: EventType | null) => void;
  setEvents: (events: EventType[] | []) => void;
  getEvent: (id: number) => Promise<EventType>;
  getEvents: (params?: GetEventsParams) => Promise<EventType[]>;
  createEvent: (event: EventType) => Promise<void>;
  updateEvent: (id: number, event: EventType) => Promise<void>;
  deleteEvent: (id: number) => Promise<void>;
}

export const useEventStore = create<EventState>((set) => ({
  event: null,
  events: [],
  setEvent: (event: EventType | null) => set({ event }),
  setEvents: (events: EventType[] | []) => set({ events }),
  getEvent: async (id: number) => {
    try {
      const response = await EventService.getEvent(id);
      // set({ event: response.data });
      return response.data;
      console.log('respons of event', response);
    } catch (error) {
      console.error('Error fetching events:', error);
    }
  },
  getEvents: async ({ categoryId, searchText }: GetEventsParams = {}) => {
    try {
      const response = await EventService.getEvents({ categoryId, searchText });

      // set({ events: response.data });
      return response.data;
      console.log('  event', response);
    } catch (error) {
      console.error('Error fetching events:', error);
    }
  },
  createEvent: async (event: EventType) => {
    try {
      const response = await EventService.createEvent(event);
      console.log('created event ', response);
    } catch (error) {
      console.error('Error creating events:', error);
    }
  },
  updateEvent: async (id: number, event: EventType) => {
    try {
      const response = await EventService.updateEvent(id, event);
      console.log('updated event ', response);
    } catch (error) {
      console.error('Error updating events:', error);
    }
  },
  deleteEvent: async (id: number) => {
    try {
      const response = await EventService.deleteEvent(id);
      console.log('deleted event', response);
    } catch (error) {
      console.error('Error deleting events:', error);
    }
  },
}));
