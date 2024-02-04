import { createSlice } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { authApi } from "../../Apis/services/auth/authApi";

type InitialState = {
  accessToken: string | null;
  userName: string | null;
};

const initialState: InitialState = {
  accessToken: null,
  userName: null,
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

export const { _logout, _setUserName } = authSlice.actions;
export default authSlice.reducer;
