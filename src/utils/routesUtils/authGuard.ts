import { redirect } from '@tanstack/react-router';
import { UserState } from '../../stores/useUserState';
import { jwtDecode } from 'jwt-decode';
import { JwtPayload } from '../../types/auth';
import toast from 'react-hot-toast';

export const checkAuth = (userState: UserState | undefined) => {
  if (userState && userState.token) {
    const decodedToken: JwtPayload = jwtDecode(userState.token);
    const jwtExpirationTime = decodedToken.exp * 1000;
    const now = Date.now();

    if (now > jwtExpirationTime) {
      toast.error('Votre session a expiré, veuillez vous reconnecter');
      userState.logout();
      throw redirect({ to: '/login' });
    }

    if (!userState.isAuth) {
      toast.error(
        "Oups il semblerait que vous n'ayez pas les droits pour accéder à cette page"
      );
      throw redirect({ to: '/login' });
    }
  } else {
    toast.error('Vous devez être connecté pour accéder à cette page');
    throw redirect({ to: '/login' });
  }
};
