import { create } from 'zustand';
import { IUser } from './types';
import AuthService from '../service/AuthService';
import axios from 'axios';
import { AuthResponse } from './AuthResponse';
import { API_URL } from '../../../shared/api/axiosInstance';

interface AuthState {
  user: IUser | null;
  token: string | null;
  isAuth: boolean;
  loading: boolean;
  error: string | null;
  setCurrentUser: (user: IUser | null, token?: string | null) => void;
  login: (email: string, password: string) => Promise<void>;
  registration: (
    fullName: string,
    email: string,
    password: string,
  ) => Promise<void>;
  logout: () => Promise<void>;
  checkAuth: () => Promise<void>;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  token: null,
  isAuth: false,
  loading: false,
  error: null,

  setCurrentUser: (user, token) =>
    set({
      user: user || ({} as IUser),
      token: token || null,
      isAuth: !!user,
    }),
  registration: async (fullName: string, email: string, password: string) => {
    set({ loading: true, error: null });
    try {
      const response = await AuthService.registration(
        fullName,
        email,
        password,
      );
      console.log(response);
    } catch (error) {
      console.log(error);
      set({ loading: false });
    }
  },
  login: async (email: string, password: string) => {
    set({ loading: true, error: null });
    try {
      const response = await AuthService.login(email, password);
      console.log(response);
      localStorage.setItem('token', response.data.token);
      set({
        user: response.data.user,
        token: response.data.token,
        isAuth: true,
        loading: false,
      });
    } catch (error) {
      console.log(error);
      set({ loading: false });
    }
  },
  logout: async () => {
    try {
      await AuthService.logout();
      localStorage.removeItem('token');
      set({ token: null, isAuth: false });
    } catch (error) {
      console.log(error);
    }
  },
  checkAuth: async () => {
    set({ loading: true, error: null });
    console.log('Calling refresh token');
    try {
      const response = await axios.post<AuthResponse>(
        `${API_URL}/auth/refresh`,
        {},
        { withCredentials: true },
      );
      console.log(response);
      localStorage.setItem('token', response.data.token);
      set({
        user: response.data.user,
        token: response.data.token,
        isAuth: true,
        loading: false,
      });
    } catch (error) {
      console.log(error);
      set({ user: null, token: null, isAuth: false, loading: false });
    }
  },
}));
