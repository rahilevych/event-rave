import { AxiosResponse } from 'axios';
import api from '../../../shared/api/axiosInstance';
import { UpdatedUser } from '../model/types';
import { UpdateUserResponse } from '../model/UpdateUserResponse';

export default class UserService {
  static async updateUser(
    id: number,
    data: Partial<UpdatedUser>,
  ): Promise<AxiosResponse<UpdateUserResponse>> {
    console.log(data);
    return api.patch(`/users/${id}`, data);
  }

  static async getUser(): Promise<AxiosResponse<UpdateUserResponse>> {
    return api.get(`/users/me`);
  }
}
