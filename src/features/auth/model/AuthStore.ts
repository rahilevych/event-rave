import { create } from 'zustand';
import AuthService from '../service/AuthService';
import axios from 'axios';
import { AuthResponse } from './AuthResponse';
import { API_URL } from '../../../shared/api/axiosInstance';
import { useUserStore } from '../../profile/model/UserStore';

interface AuthState {
  token: string | null;
  isAuth: boolean;
  loading: boolean;
  error: string | null;

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
  token: null,
  isAuth: false,
  loading: false,
  error: null,

  registration: async (fullName: string, email: string, password: string) => {
    set({ loading: true, error: null });
    try {
      const response = await AuthService.registration(
        fullName,
        email,
        password,
      );
      localStorage.setItem('token', response.data.token);
      set({
        user: response.data.user,
        token: response.data.token,
        isAuth: true,
        loading: false,
      });
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
      const token = response.data.token;
      const user = response.data.user;
      localStorage.setItem('token', token);
      set({
        token: response.data.token,
        isAuth: true,
        loading: false,
      });
      const { setUser, getUser } = useUserStore.getState();
      setUser(user);
      await getUser(user.id);
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
      useUserStore.getState().setUser(null);
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

      const token = response.data.token;
      const user = response.data.user;
      localStorage.setItem('token', token);
      set({
        token: response.data.token,
        isAuth: true,
        loading: false,
      });
      const { setUser, getUser } = useUserStore.getState();
      setUser(user);
      await getUser(user.id);
    } catch (error) {
      console.log(error);
      set({ token: null, isAuth: false, loading: false });
    }
  },
}));
