import { IUser } from './types';

export interface AuthResponse {
  token: string;
  user: IUser;
}
