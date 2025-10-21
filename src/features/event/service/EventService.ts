import { AxiosResponse } from 'axios';
import api from '../../../shared/api/axiosInstance';
import { EventType } from '../model/types';

export default class EventService {
  static async getEvents(categoryId?: number): Promise<AxiosResponse> {
    if (categoryId) {
      return api.get(`/events?categoryId=${categoryId}`);
    } else {
      return api.get(`/events`);
    }
  }
  static async getEvent(id: number): Promise<AxiosResponse> {
    return api.get(`/events/${id}`);
  }
  static async updateEvent(id: number, event: Partial<EventType>) {
    return api.patch(`/events/${id}`, event);
  }
  static async deleteEvent(id: number) {
    return api.delete(`/events/${id}`);
  }
  static async createEvent(event: EventType) {
    return api.post('/events', event);
  }
}
