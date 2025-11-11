import { useQuery } from '@tanstack/react-query';
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
export const useCategories = () => {
  return useQuery<Category[]>({
    queryKey: ['categories'],
    queryFn: async () => {
      const res = await CategoryService.getCategories();

      return res.data;
    },
    staleTime: 5 * 60 * 1000,
  });
};
