import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useAuthStore } from '../model/AuthStore';
import AuthService from '../service/AuthService';
import toast from 'react-hot-toast';
import { AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';

export const useLogout = () => {
  const setIsAuth = useAuthStore((state) => state.setIsAuth);
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  return useMutation({
    mutationFn: async () => {
      await AuthService.logout();
    },
    onSuccess: () => {
      localStorage.removeItem('token');
      queryClient.setQueryData(['auth', 'currentUser'], { isAuth: false });
      queryClient.removeQueries({ queryKey: ['currentUser'] });
      queryClient.invalidateQueries({ queryKey: ['events'] });
      queryClient.clear();
      toast.success('Successfully logged out!');
      setIsAuth(false);
      navigate('/', { replace: true });
    },
    onError: (error: AxiosError) => {
      if (!error.response) {
        toast.error('Network error, check your connection!');
        return;
      }
      if (error.response.status === 500) {
        toast.error('Server unavailable, try again later');
      } else {
        localStorage.removeItem('token');
        setIsAuth(false);
        navigate('/', { replace: true });
      }
    },
  });
};
