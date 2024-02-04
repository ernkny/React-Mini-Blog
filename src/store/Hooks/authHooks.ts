import { useSelector } from "react-redux";

import { RootState } from "../store";

export const useIsAuthenticated = () =>
  useSelector((state: RootState) => state.auth.accessToken !== null);

export const useAccessToken = () =>
  useSelector((state: RootState) => state.auth.accessToken);

export const useUserName = () =>
  useSelector((state: RootState) => state.auth.userName);