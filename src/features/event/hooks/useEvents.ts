import { useQuery, useQueryClient, useMutation } from '@tanstack/react-query';
import { EventType } from '../model/types';
import EventService from '../service/EventService';

interface UseEventsParams {
  categoryId?: number;
  searchText?: string;
}

export const useEvent = (id: number) => {
  return useQuery<EventType>({
    queryKey: ['event', id],
    queryFn: async () => {
      const res = await EventService.getEvent(id);
      console.log(res.data);
      return res.data;
    },
    enabled: !!id,
    staleTime: 5 * 60 * 1000,
  });
};

export const useEvents = ({ categoryId, searchText }: UseEventsParams) => {
  return useQuery<EventType[]>({
    queryKey: ['events', categoryId ?? 0, searchText ?? ''],
    queryFn: async () => {
      const res = await EventService.getEvents({ categoryId, searchText });

      return res.data;
    },
    staleTime: 5 * 60 * 1000,
  });
};

export const useToggleLike = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (eventId: number) => {
      await EventService.toggleLike(eventId);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['events'] });
      queryClient.invalidateQueries({ queryKey: ['event'] });
    },
  });
};
