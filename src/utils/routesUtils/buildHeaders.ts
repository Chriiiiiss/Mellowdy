import { IUser } from '../../interfaces/user';

export const buildHeaders = (token: string, user: Partial<IUser>) => {
  const headers = new Headers();
  headers.append('Content-Type', 'application/json');
  headers.append('Authorization', `Bearer ${token}`);
  user.appleMusicToken
    ? headers.append('Music-User-Token', user.appleMusicToken)
    : null;
  return headers;
};
