import { useMutation, useQueryClient } from '@tanstack/react-query';
import AuthService from '../service/AuthService';
import { AuthResponse } from '../model/AuthResponse';
import { useUserStore } from '../../profile/model/UserStore';
import { API_URL } from '../../../shared/api/axiosInstance';
import axios from 'axios';
import { useAuthStore } from '../model/AuthStore';

interface LoginVariables {
  email: string;
  password: string;
}
interface RegistrationVariables {
  fullName: string;
  email: string;
  password: string;
}

export const useAuth = () => {
  const queryClient = useQueryClient();
  const { setUser } = useUserStore.getState();
  const { setIsAuth, setToken } = useAuthStore.getState();
  const login = useMutation({
    mutationFn: async ({ email, password }: LoginVariables) => {
      const res = await AuthService.login(email, password);
      return res.data;
    },
    onSuccess: (data) => {
      localStorage.setItem('token', data.token);
      queryClient.setQueryData(['auth'], { isAuth: true });
      setUser(data.user);
      setIsAuth(true);
      setToken(data.token);
    },
  });
  const logout = useMutation({
    mutationFn: async () => {
      await AuthService.logout();
    },
    onSuccess: () => {
      setUser(null);
      localStorage.removeItem('token');
      queryClient.setQueryData(['auth'], { isAuth: false });
      queryClient.removeQueries({ queryKey: ['user'] });
      setIsAuth(false);
      setToken(null);
    },
  });

  const registration = useMutation<AuthResponse, Error, RegistrationVariables>({
    mutationFn: async ({
      fullName,
      email,
      password,
    }: RegistrationVariables) => {
      const res = await AuthService.registration(fullName, email, password);
      return res.data;
    },
    onSuccess: (data) => {
      localStorage.setItem('token', data.token);
      queryClient.setQueryData(['auth'], { isAuth: true });
      setIsAuth(true);
      setToken(data.token);
    },
  });

  const checkAuth = useMutation<AuthResponse, Error>({
    mutationFn: async () => {
      const res = await axios.post<AuthResponse>(
        `${API_URL}/auth/refresh`,
        {},
        { withCredentials: true },
      );
      return res.data;
    },
    onSuccess: async (data) => {
      localStorage.setItem('token', data.token);
      queryClient.setQueryData(['auth'], { isAuth: true });
      setUser(data.user);
      setIsAuth(true);
      setToken(data.token);
    },
    onError: () => {
      setUser(null);
      localStorage.removeItem('token');
      queryClient.setQueryData(['auth'], { isAuth: false });
      setIsAuth(false);
      setToken(null);
    },
  });

  return { login, logout, registration, checkAuth };
};
