import { useQuery } from '@tanstack/react-query';
import UserService from '../../profile/service/UserService';

export const useGetUser = () => {
  const token = localStorage.getItem('token');
  return useQuery({
    queryKey: ['currentUser'],
    queryFn: async () => {
      if (!token) return null;
      const res = await UserService.getUser();

      return res.data.user;
    },
  });
};
