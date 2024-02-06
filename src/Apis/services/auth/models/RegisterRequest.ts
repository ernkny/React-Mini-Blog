export type RegisterRequest = {
  Username: string;
  Password: string;
  Email:string
  accessToken:string;
  refreshToken:string;
  accessTokenExpireDate: number;
  refreshTokenExpireDate: number;
};
