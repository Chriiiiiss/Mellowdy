import { create } from 'zustand';
import { IUser } from '../interfaces/user';

export type UserState = {
  user: IUser | null;
  provider: string | null;
  isAuth: boolean;
  login: (userData: IUser) => void;
  logout: () => void;
};

// User state
export const useUserState = create<UserState>()((set) => ({
  user: null,
  provider: null,
  isAuth: false,
  login: (userData: IUser) => set({ user: userData, isAuth: true }),
  logout: () => set({ user: null, isAuth: false }),
}));
