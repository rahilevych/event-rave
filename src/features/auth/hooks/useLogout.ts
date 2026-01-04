import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useAuthStore } from '../model/AuthStore';
import AuthService from '../service/AuthService';

export const useLogout = () => {
  const setIsAuth = useAuthStore((state) => state.setIsAuth);
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async () => {
      await AuthService.logout();
    },
    onSuccess: () => {
      localStorage.removeItem('token');
      queryClient.setQueryData(['auth', 'currentUser'], { isAuth: false });
      queryClient.removeQueries({ queryKey: ['currentUser'] });
      queryClient.invalidateQueries({ queryKey: ['events'] });
      setIsAuth(false);
    },
  });
};
