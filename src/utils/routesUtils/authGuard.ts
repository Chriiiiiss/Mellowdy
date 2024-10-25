import { redirect } from '@tanstack/react-router';
import { UserState } from '../../stores/useUserState';
import { jwtDecode } from 'jwt-decode';
import { JwtPayload } from '../../types/auth';

export const checkAuth = (userState: UserState | undefined) => {
  if (userState && userState.token) {
    const decodedToken: JwtPayload = jwtDecode(userState.token);
    const jwtExpirationTime = decodedToken.exp * 1000;
    const now = Date.now();

    if (now > jwtExpirationTime) {
      userState.logout();
      throw redirect({ to: '/login' });
    }

    if (!userState.isAuth) throw redirect({ to: '/login' });
  }
};
