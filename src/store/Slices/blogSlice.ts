import { createSlice } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";


type InitialState = {
  };
  
  const initialState: InitialState = {
  };

  const blogSlice = createSlice({
    name: "blogs",
    initialState,
    reducers: {

    }
    });
  
  export const blogPersistConfig = {
    key: "blog",
    storage: storage,
    blacklist: [
    ],
  };
  
  export const {
  } = blogSlice.actions;
  export default blogSlice.reducer;