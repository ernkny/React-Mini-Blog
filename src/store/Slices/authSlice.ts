import { createSlice } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { authApi } from "../../Apis/services/auth/authApi";
import { act } from "react-dom/test-utils";
import { LoginRequest, LoginResponse } from "../../Apis/services/auth/models";

type InitialState = {
  accessToken: string | null;
  userName: string | null;
  userProfileInformation:LoginResponse | null;
}

const initialState: InitialState = {
  accessToken: null,
  userName: null,
  userProfileInformation:null
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    _logout: (state) => {
      state.accessToken = null;
      state.userName = null;
    },
    _setUserName: (state, action) => {
      state.userName = action.payload;
    },
    _setUserProfileInformation:(state,action)=>{
      state.userProfileInformation = action.payload;
    }
  },
  
  extraReducers: (builder) => {
    builder.addMatcher(
      authApi.endpoints.login.matchFulfilled,
      (state, action) => {
        state.accessToken = action.payload.accessToken;
      }
    );
  },
});

export const authPersistConfig = {
  key: "auth",
  storage: storage,
  blacklist: [""],
};

export const { _logout, _setUserName,_setUserProfileInformation } = authSlice.actions;
export default authSlice.reducer;
