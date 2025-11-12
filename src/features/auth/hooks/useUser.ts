import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useUserStore } from '../../profile/model/UserStore';
import { User } from '../../profile/model/types';
import UserService from '../../profile/service/UserService';

export const useUser = (userId?: number) => {
  const queryClient = useQueryClient();
  const { setUser } = useUserStore.getState();

  const getUser = useQuery<User>({
    queryKey: ['user', userId],
    queryFn: async () => {
      const res = await UserService.getUser(userId!);

      setUser(res.data.user);
      return res.data.user;
    },
    enabled: !!userId,
  });
  const updateUser = useMutation({
    mutationFn: async (data: { id: number; user: Partial<User> }) => {
      const res = await UserService.updateUser(data.id, data.user);
      return res.data.user;
    },
    onSuccess: (data) => {
      setUser(data);
      queryClient.invalidateQueries({ queryKey: ['user', userId] });
    },
  });
  return { getUser, updateUser };
};
