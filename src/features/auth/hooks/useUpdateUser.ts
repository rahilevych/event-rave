import { useMutation, useQueryClient } from '@tanstack/react-query';
import { UpdatedUser } from '../../profile/model/types';
import UserService from '../../profile/service/UserService';

export const useUpdateUser = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: { id: number; user: UpdatedUser }) => {
      const res = await UserService.updateUser(data.id, data.user);
      return res.data.user;
    },
    onMutate: async (userData) => {
      await queryClient.cancelQueries({ queryKey: ['currentUser'] });
      const previousUserData = queryClient.getQueryData(['currentUser']);

      if (previousUserData) {
        const optimisticUserData: UpdatedUser = {
          ...previousUserData,
          ...userData.user,
        };
        queryClient.setQueryData(['currentUser'], optimisticUserData);
      }

      return { previousUserData };
    },
    onError: (_err, _variables, context) => {
      if (context?.previousUserData) {
        queryClient.setQueryData(['currentUser'], context.previousUserData);
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['currentUser'] });
    },
  });
};
