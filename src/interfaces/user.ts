export interface IUser {
  username?: string | null;
  token?: string | null;
  email?: string | null;
  providerId?: number | null;
  isAuth?: boolean | null;
}

export const userMock: IUser = {
  username: null,
  token: null,
  email: null,
  providerId: null,
  isAuth: false,
};
