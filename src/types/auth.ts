export type TAuthMessage = {
  token: string;
  newUser: boolean;
};

export type JwtPayload = {
  displayName: string;
  exp: number;
  iat: number;
  id: number;
  providerID: number;
};
