
import { store } from "../store";
import { _logout, _setUserName } from "../Slices/authSlice";

export const logout = (): any => {
  localStorage.removeItem("accessToken");
  store.dispatch(_logout());
};

export const setUserName = (userName: string): any => {  
  store.dispatch(_setUserName(userName));
};
