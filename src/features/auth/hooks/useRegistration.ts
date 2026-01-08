import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useAuthStore } from '../model/AuthStore';
import AuthService from '../service/AuthService';
import toast from 'react-hot-toast';
import { AxiosError } from 'axios';

interface RegistrationVariables {
  fullName: string;
  email: string;
  password: string;
}

export const useRegistration = () => {
  const queryClient = useQueryClient();
  const setIsAuth = useAuthStore((state) => state.setIsAuth);

  return useMutation({
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
      queryClient.setQueryData(['auth', 'currentUser'], { isAuth: true });
      setIsAuth(true);
      toast.success('Account was created!');
    },
    onError: (error: AxiosError) => {
      if (!error.response) {
        toast.error('Network error, check your connection!');
        return;
      }

      const data = error.response.data as { message?: string };

      switch (error.response.status) {
        case 400:
          toast.error(data.message || 'Invalid input');
          break;
        case 401:
          toast.error('Invalid login or password');
          break;
        case 500:
          toast.error('Server unavailable, try again later');
          break;
        default:
          toast.error(data.message || 'An unexpected error occurred');
      }
    },
  });
};
