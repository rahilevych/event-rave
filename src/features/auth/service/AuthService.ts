import { AxiosResponse } from 'axios';
import api from '../../../shared/api/axiosInstance';
import { AuthResponse } from '../model/AuthResponse';

export default class AuthService {
  static async login(
    email: string,
    password: string,
  ): Promise<AxiosResponse<AuthResponse>> {
    return api.post('/auth/login', { email, password });
  }

  static async registration(
    fullName: string,
    email: string,
    password: string,
  ): Promise<AxiosResponse<AuthResponse>> {
    return api.post('/users/register', { fullName, email, password });
  }
  static async logout(): Promise<void> {
    return api.post('/auth/logout');
  }
}
