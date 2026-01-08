import { useMutation, useQueryClient } from '@tanstack/react-query';
import { UpdatedUser } from '../../profile/model/types';
import UserService from '../../profile/service/UserService';
import { AxiosError } from 'axios';
import toast from 'react-hot-toast';

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
    onError: (err: AxiosError, _variables, context) => {
      if (context?.previousUserData) {
        queryClient.setQueryData(['currentUser'], context.previousUserData);
      }
      if (!err.response) {
        toast.error('Network error, check your connection!');
        return;
      }
      const data = err.response.data as { message?: string };
      switch (err.response.status) {
        case 400:
          toast.error(data?.message || 'Invalid data');
          break;
        case 500:
          toast.error('Server unavailable, try again later');
          break;
        default:
          toast.error('An unexpected error occurred');
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['currentUser'] });
      toast.success('Data updated successfully!');
    },
  });
};
