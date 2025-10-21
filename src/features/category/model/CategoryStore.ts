import { create } from 'zustand';
import { Category } from './types';
import CategoryService from '../service/CaregoryService';

interface CategoryState {
  category: Category | null;
  categories: Category[] | [];
  setCategory: (category: Category | null) => void;
  createCategory: (data: Category) => Promise<void>;
  deleteCategory: (id: number) => Promise<void>;
  getCategory: (id: number) => Promise<void>;
  getCategories: () => Promise<void>;
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
      console.log(error);
    }
  },
  deleteCategory: async (id: number) => {
    try {
      const response = await CategoryService.deleteCategory(id);
      console.log('', response);
    } catch (error) {
      console.log(error);
    }
  },
  getCategory: async (id: number) => {
    try {
      const response = await CategoryService.getCategory(id);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  },
  getCategories: async () => {
    try {
      const response = await CategoryService.getCategories();
      set({ categories: response.data });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  },
  updateCategory: async (id: number, data: Category) => {
    try {
      const response = await CategoryService.updateCategory(id, data);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  },
}));
