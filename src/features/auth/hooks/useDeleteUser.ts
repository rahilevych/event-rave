import { useMutation, useQueryClient } from '@tanstack/react-query';
import UserService from '../../profile/service/UserService';
import { AxiosError } from 'axios';
import toast from 'react-hot-toast';
import { useAuthStore } from '../model/AuthStore';
import { useNavigate } from 'react-router-dom';

export const useDeleteUser = () => {
  const queryClient = useQueryClient();
  const setIsAuth = useAuthStore((state) => state.setIsAuth);
  const navigate = useNavigate();

  return useMutation({
    mutationFn: async () => {
      const res = await UserService.deleteUser();
      return res.data.user;
    },
    onError: (error: AxiosError) => {
      if (!error.response) {
        toast.error('Network error');
      } else {
        switch (error.response.status) {
          case 401:
            toast.error('You are not authorized');
            break;
          case 500:
            toast.error('Server error, try later');
            break;
          default:
            toast.error('Could not delete account');
        }
      }
    },
    onSuccess: () => {
      localStorage.removeItem('token');
      setIsAuth(false);
      navigate('/login', { replace: true });
      toast.success('Your account has been deleted');
      queryClient.removeQueries({ queryKey: ['auth', 'currentUser'] });
    },
  });
};
