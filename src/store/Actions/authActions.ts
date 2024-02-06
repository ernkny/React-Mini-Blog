
import { store } from "../store";
import { _logout, _setUserName, _setUserProfileInformation } from "../Slices/authSlice";
import {LoginResponse } from "../../Apis/services/auth/models";

export const logout = (): any => {
  localStorage.removeItem("accessToken");
  store.dispatch(_logout());
};

export const setUserName = (userName: string): any => {  
  store.dispatch(_setUserName(userName));
};

export const setUserProfile = (profile: LoginResponse): any => {  
  store.dispatch(_setUserProfileInformation(profile));
};
