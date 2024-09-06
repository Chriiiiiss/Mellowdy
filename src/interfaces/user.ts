// TODO: Add expiration date to the User

export interface IUser {
  username: string | null;
  provider: number | null;
  email: string | null;
}

export const userUnloggedMock: IUser = {
  username: null,
  provider: null,
  email: null,
};

export const userLoggedMock: IUser = {
  username: 'test',
  provider: 1,
  email: 'test@test.com',
};
