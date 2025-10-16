import { User } from '../../profile/model/types';

export interface AuthResponse {
  token: string;
  user: User;
}
