export interface IUser {
  username?: string | null;
  email?: string | null;
  providerId?: number | null;
  isAuth?: boolean | null;
}

export const userMock: IUser = {
  username: null,
  email: null,
  providerId: null,
  isAuth: false,
};
