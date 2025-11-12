import { create } from 'zustand';
interface AuthState {
  token: string | null;
  isAuth: boolean;
  setIsAuth: (isAuth: boolean) => void;
  setToken: (token: string | null) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  token: null,
  isAuth: false,
  setIsAuth: (isAuth) => set({ isAuth }),
  setToken: (token) => set({ token }),
}));
