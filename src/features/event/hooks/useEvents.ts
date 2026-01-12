import {
  useQuery,
  useQueryClient,
  useMutation,
  useInfiniteQuery,
} from '@tanstack/react-query';
import { EventType } from '../model/types';
import EventService from '../service/EventService';

interface UseEventsParams {
  categoryId?: number;
  searchText?: string;
  onlyLiked?: boolean;
  limit?: number;
  filter?: string;
  date?: Date;
}

export const useEvent = (id: number) => {
  return useQuery<EventType>({
    queryKey: ['event', id],
    queryFn: async () => {
      const res = await EventService.getEvent(id);

      return res.data;
    },
    enabled: !!id,
    staleTime: 5 * 60 * 1000,
  });
};

export const useEvents = ({
  categoryId,
  searchText,

  limit = 1,
  filter = '',
  date,
}: UseEventsParams) => {
  return useInfiniteQuery({
    queryKey: [
      'events',
      categoryId ?? 0,
      searchText ?? '',
      limit,
      filter,
      date,
    ],
    queryFn: async ({ pageParam = 0 }: { pageParam?: number }) => {
      const res = await EventService.getEvents({
        categoryId,
        searchText,

        offset: pageParam,
        limit,
        filter,
        date,
      });

      return res.data;
    },

    getNextPageParam: (lastPage, allPages) => {
      if (!lastPage || lastPage.length < limit) return undefined;
      return allPages.length * limit;
    },
    initialPageParam: 0,
    staleTime: 5 * (60 * 1000),
  });
};
export const useLikedEvents = ({ limit = 1 }: UseEventsParams) => {
  return useInfiniteQuery({
    queryKey: ['liked-events', limit],
    queryFn: async ({ pageParam = 0 }: { pageParam?: number }) => {
      const res = await EventService.getLikedEvents({
        offset: pageParam,
        limit,
      });

      return res.data;
    },

    getNextPageParam: (lastPage, allPages) => {
      if (!lastPage || lastPage.length < limit) return undefined;
      return allPages.length * limit;
    },
    initialPageParam: 0,
    staleTime: 5 * (60 * 1000),
  });
};

export const useToggleLike = (eventId: number) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async () => {
      await EventService.toggleLike(eventId);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['liked-events'] });
      queryClient.invalidateQueries({ queryKey: ['events'] });
      queryClient.invalidateQueries({ queryKey: ['event', eventId] });
    },
  });
};
