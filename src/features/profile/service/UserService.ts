import { AxiosResponse } from 'axios';
import api from '../../../shared/api/axiosInstance';
import { User } from '../model/types';
import { UpdateUserResponse } from '../model/UpdateUserResponse';

export default class UserService {
  static async updateUser(
    id: number,
    data: Partial<User>,
  ): Promise<AxiosResponse<UpdateUserResponse>> {
    return api.patch(`/users/${id}`, data);
  }

  static async getUser(): Promise<AxiosResponse<UpdateUserResponse>> {
    return api.get(`/users/me`);
  }
}
