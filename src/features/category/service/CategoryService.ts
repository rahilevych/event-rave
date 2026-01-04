import { AxiosResponse } from 'axios';
import api from '../../../shared/api/axiosInstance';
import { Category } from '../model/types';

export default class CategoryService {
  static async getCategory(id: number): Promise<AxiosResponse> {
    return api.get(`/categories/${id}`);
  }
  static async getCategories(
    skip = 0,
    take = 1,
  ): Promise<AxiosResponse<Category[]>> {
    return api.get(`/categories?skip=${skip}&take=${take}`);
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
