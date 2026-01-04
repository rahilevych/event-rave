import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useAuthStore } from '../model/AuthStore';
import AuthService from '../service/AuthService';

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
    },
  });
};
