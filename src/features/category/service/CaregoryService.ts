import { AxiosResponse } from 'axios';
import api from '../../../shared/api/axiosInstance';
import { Category } from '../model/types';

export default class CategoryService {
  static async getCategory(id: number): Promise<AxiosResponse> {
    return api.get(`/categories/${id}`);
  }
  static async getCategories(): Promise<AxiosResponse> {
    return api.get(`/categories`);
  }
  static async updateCategory(
    id: number,
    category: Partial<Category>,
  ): Promise<AxiosResponse> {
    return api.patch(`/categories/${id}`, category);
  }
  static async deleteCategory(id: number): Promise<AxiosResponse> {
    return api.delete(`/categories/${id}`);
  }
  static async createCategory(category: Category): Promise<AxiosResponse> {
    return api.post(`/categories`, { category });
  }
}
