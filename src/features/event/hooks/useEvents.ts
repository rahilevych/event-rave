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

export const useEvents = ({
  categoryId,
  searchText,
  onlyLiked,
  limit = 1,
}: UseEventsParams) => {
  return useInfiniteQuery({
    queryKey: ['events', categoryId ?? 0, searchText ?? '', onlyLiked, limit],
    queryFn: async ({ pageParam = 0 }: { pageParam?: number }) => {
      const res = await EventService.getEvents({
        categoryId,
        searchText,
        onlyLiked,
        offset: pageParam,
        limit,
      });

      return res.data;
    },
    getNextPageParam: (lastPage, allPages) => {
      if (!lastPage || lastPage.length < limit) return undefined; // больше страниц нет
      return allPages.length * limit;
    },
    initialPageParam: 0,
  });
};

export const useToggleLike = (eventId: number) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async () => {
      await EventService.toggleLike(eventId);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['events'] });
      queryClient.invalidateQueries({ queryKey: ['event', eventId] });
    },
  });
};
