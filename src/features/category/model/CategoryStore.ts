import { create } from 'zustand';
import { Category } from './types';
import CategoryService from '../service/CategoryService';

interface CategoryState {
  createCategory: (data: Category) => Promise<Category>;
  deleteCategory: (id: number) => Promise<Category>;
  getCategory: (id: number) => Promise<void>;
  getCategories: () => Promise<void>;
  updateCategory: (id: number, data: Category) => Promise<Category>;
  error: string;
  setError: (message: string) => void;
  loading: boolean;
  setLoading: (value: boolean) => void;
  categories: Category[];
  category: Category | null;
}

export const useCategoryStore = create<CategoryState>((set) => ({
  categories: [],
  category: null,
  error: '',
  setError: (message: string) => set({ error: message }),
  loading: false,
  setLoading: (value) => set({ loading: value }),

  createCategory: async (data: Category) => {
    set({ error: '' });
    try {
      const response = await CategoryService.createCategory(data);
      return response.data;
    } catch (error) {
      set({ error: 'Failed to create category' });
      console.error('Error creating category:', error);
      throw error;
    }
  },
  deleteCategory: async (id: number) => {
    set({ error: '' });
    try {
      const response = await CategoryService.deleteCategory(id);
      return response.data;
    } catch (error) {
      set({ error: 'Failed to delete category' });
      console.error('Error deleting category:', error);
      throw error;
    }
  },
  getCategory: async (id: number) => {
    set({ loading: true, error: '' });
    try {
      const response = await CategoryService.getCategory(id);
      set({ category: response.data });
    } catch (error) {
      set({ error: 'Failed to load category' });
      console.error('Error loading category:', error);
      throw error;
    } finally {
      set({ loading: false });
    }
  },
  getCategories: async () => {
    set({ loading: true, error: '' });
    try {
      const response = await CategoryService.getCategories();

      set({ categories: response.data });
    } catch (error) {
      set({ error: 'Failed to load categories' });

      console.error('Error loading categories:', error);
      throw error;
    } finally {
      set({ loading: false });
    }
  },
  updateCategory: async (id: number, data: Category) => {
    set({ error: '' });
    try {
      const response = await CategoryService.updateCategory(id, data);
      return response.data;
    } catch (error) {
      set({ error: 'Failed to update category' });
      console.error('Error updateing category:', error);
      throw error;
    }
  },
}));
