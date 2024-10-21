export interface IUser {
  username?: string | null;
  appleMusicToken?: string | null;
}

export const userMock: IUser = {
  username: null,
  appleMusicToken: null,
};
