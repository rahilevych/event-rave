import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import { Category } from '../model/types';
import CategoryService from '../service/CategoryService';

export const useCategory = (id: number) => {
  return useQuery<Category>({
    queryKey: ['category', id],
    queryFn: async () => {
      const res = await CategoryService.getCategory(id);
      return res.data;
    },
    enabled: !!id,
    staleTime: 5 * 60 * 1000,
  });
};
export const useCategories = (take: number) => {
  return useInfiniteQuery({
    queryKey: ['categories', take],
    queryFn: async ({ pageParam = 0 }: { pageParam?: number }) => {
      const res = await CategoryService.getCategories(pageParam, take);
      return res.data;
    },
    getNextPageParam: (lastPage, allPages) => {
      if (!lastPage || lastPage.length === 0) return undefined;
      return allPages.length;
    },
    initialPageParam: 0,
  });
};
