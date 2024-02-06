export type LoginResponse = {
  id:number;
  username: string;
  password: string;
  accessToken: string;
  refreshToken: string;
  accessTokenExpireDate: number;
  refreshTokenExpireDate: number;
};
