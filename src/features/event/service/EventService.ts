import { AxiosResponse } from 'axios';
import api from '../../../shared/api/axiosInstance';
import { EventType } from '../model/types';

export default class EventService {
  static async getEvents(params?: {
    categoryId?: number;
    searchText?: string;
    limit?: number;
    offset?: number;
    onlyLiked?: boolean;
  }): Promise<AxiosResponse> {
    const query = new URLSearchParams();

    if (params?.categoryId)
      query.append('categoryId', params.categoryId.toString());
    if (params?.searchText) query.append('searchText', params.searchText);
    if (params?.limit) query.append('limit', params.limit.toString());
    if (params?.offset) query.append('offset', params.offset.toString());
    if (params?.onlyLiked)
      query.append('onlyLiked', params?.onlyLiked.toString());

    const url = query.toString() ? `/events?${query.toString()}` : '/events';
    return api.get(url);
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
  static async toggleLike(eventId: number) {
    console.log(eventId);
    return api.put(`/likes/${eventId}/toggle`);
  }
}
