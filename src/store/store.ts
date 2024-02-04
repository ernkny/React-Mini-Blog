import { combineReducers, configureStore } from '@reduxjs/toolkit'
import storage from "redux-persist/lib/storage";
import {  persistReducer,persistStore } from "redux-persist";
import blogs,{ blogPersistConfig } from './Slices/blogSlice';
import auth, { authPersistConfig } from "./Slices/authSlice";
import { apiSlice } from '../Apis/services/apiSlice';

const rootPersistConfig={
  key:"root",
  storage,
  blacklist: [],
}

const rootReducer = combineReducers({
  [apiSlice.reducerPath]: apiSlice.reducer,
  auth: persistReducer(authPersistConfig, auth),
  blogs:persistReducer(blogPersistConfig,blogs)
});

const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

export const store = configureStore({
    reducer:persistedReducer,
      middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: ["persist/PERSIST"],
        },
      }).concat(apiSlice.middleware)
})


export const persistor = persistStore(store);
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;