import { create } from 'zustand';
import { Category } from './types';
import CategoryService from '../service/CategoryService';
import { AxiosError } from 'axios';

interface CategoryState {
  category: Category | null;
  categories: Category[] | [];
  setCategory: (category: Category | null) => void;
  createCategory: (data: Category) => Promise<void>;
  deleteCategory: (id: number) => Promise<void>;
  getCategory: (id: number) => Promise<Category>;
  getCategories: () => Promise<Category[]>;
  updateCategory: (id: number, data: Category) => Promise<void>;
}

export const useCategoryStore = create<CategoryState>((set) => ({
  category: null,
  categories: [],
  setCategory: (category: Category | null) => set({ category }),
  createCategory: async (data: Category) => {
    try {
      const response = await CategoryService.createCategory(data);
      console.log(response);
    } catch (error) {
      let message = 'Unknown error';
      if (error instanceof AxiosError) {
        message = error.response?.data?.message || error.message;
      }
      throw new Error(message);
    }
  },
  deleteCategory: async (id: number) => {
    try {
      const response = await CategoryService.deleteCategory(id);
      console.log('', response);
    } catch (error) {
      let message = 'Unknown error';
      if (error instanceof AxiosError) {
        message = error.response?.data?.message || error.message;
      }
      throw new Error(message);
    }
  },
  getCategory: async (id: number) => {
    try {
      const response = await CategoryService.getCategory(id);
      return response.data;
    } catch (error) {
      let message = 'Unknown error';
      if (error instanceof AxiosError) {
        message = error.response?.data?.message || error.message;
      }
      throw new Error(message);
    }
  },
  getCategories: async () => {
    try {
      const response = await CategoryService.getCategories();
      set({ categories: response.data });
      return response.data;
    } catch (error) {
      let message = 'Unknown error';
      if (error instanceof AxiosError) {
        message = error.response?.data?.message || error.message;
      }
      throw new Error(message);
    }
  },
  updateCategory: async (id: number, data: Category) => {
    try {
      const response = await CategoryService.updateCategory(id, data);
      console.log(response);
    } catch (error) {
      let message = 'Unknown error';
      if (error instanceof AxiosError) {
        message = error.response?.data?.message || error.message;
      }
      throw new Error(message);
    }
  },
}));
