import { create } from 'zustand';
import { IUser } from '../interfaces/user';
import { persist } from 'zustand/middleware';
import { isTokenExpired } from '../utils/routesUtils/checkTokens';

export type UserState = {
  user: IUser | null;
  providerId: number | null;
  token: string | null;
  isAuth: boolean;
  login: (userData: IUser, token: string, providerId: number) => void;
  logout: () => void;
};

// User state
export const useUserState = create<UserState>()(
  persist(
    (set) => ({
      user: null,
      providerId: null,
      token: null,
      isAuth: false,
      login: (userData: IUser, token: string, providerId: number) =>
        set({ user: userData, isAuth: true, token, providerId }),
      logout: () => {
        set({ user: null, isAuth: false, token: null, providerId: null });
        useUserState.persist.clearStorage(); // Clear the localStorage on logout
      },
    }),
    {
      name: 'user-state',
      onRehydrateStorage: (state) => {
        // On hydratation of the state, check if the token is expired,
        // if yes, yeet the user out
        if (state.token && isTokenExpired(state.token)) {
          state.logout();
        }
      },
    }
  )
);
