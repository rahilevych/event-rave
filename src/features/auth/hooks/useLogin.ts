import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useAuthStore } from '../model/AuthStore';
import AuthService from '../service/AuthService';
import toast from 'react-hot-toast';
import { AxiosError } from 'axios';

interface LoginVariables {
  email: string;
  password: string;
}
export const useLogin = () => {
  const setIsAuth = useAuthStore((state) => state.setIsAuth);
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ email, password }: LoginVariables) => {
      const res = await AuthService.login(email, password);
      return res.data;
    },
    onSuccess: (data) => {
      localStorage.setItem('token', data.token);
      queryClient.setQueryData(['auth', 'currentUser'], { isAuth: true });
      queryClient.invalidateQueries({ queryKey: ['events'] });
      setIsAuth(true);
      toast.success('Successfully logged in!');
    },
    onError: (error: AxiosError) => {
      if (!error.response) {
        toast.error('Network error, check your connection!');
        return;
      }
      switch (error.response?.status) {
        case 401:
          toast.error('Invalid login or password');
          break;
        case 500:
          toast.error('Server unavaliable, try again later');
          break;
        default:
          toast.error('An unexpected error occurred ');
      }
    },
  });
};
