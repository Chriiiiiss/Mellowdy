import { redirect } from '@tanstack/react-router';
import { UserState } from '../../stores/useUserState';

export const checkAuth = (userState: UserState | undefined) => {
  if (userState && !userState.isAuth) {
    throw redirect({ to: '/login' });
  }
};
