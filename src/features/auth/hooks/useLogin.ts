import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useAuthStore } from '../model/AuthStore';
import AuthService from '../service/AuthService';

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
      setIsAuth(true);
      queryClient.setQueryData(['auth', 'currentUser'], { isAuth: true });
      queryClient.invalidateQueries({ queryKey: ['events'] });

      setIsAuth(true);
    },
  });
};
