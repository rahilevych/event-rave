import { create } from 'zustand';
import UserService from '../service/UserService';
import { User } from './types';

interface UserState {
  user: User | null;
  setUser: (user: User | null) => void;
  updateUser: (id: number, data: User) => Promise<void>;
  getUser: (id: number) => Promise<void>;
}

export const useUserStore = create<UserState>((set) => ({
  user: null,
  setUser: (user: User | null) => set({ user }),
  updateUser: async (id: number, data: User) => {
    try {
      const response = await UserService.updateUser(id, data);
      console.log('response fron update', response);
      set({ user: response.data.user });
    } catch (error) {
      console.log(error);
    }
  },
  getUser: async (id: number) => {
    try {
      const response = await UserService.getUser(id);
      set({ user: response.data.user });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  },
}));
