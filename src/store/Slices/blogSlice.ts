import { createSlice } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";


type InitialState = {
  blogSearchQuery:string
  };
  
  const initialState: InitialState = {
    blogSearchQuery:""
  };

  const blogSlice = createSlice({
    name: "blogs",
    initialState,
    reducers: {
      _setBlogQueryText:(state,action)=>{
          state.blogSearchQuery=action.payload
      }
    }
    });
  
  export const blogPersistConfig = {
    key: "blogs",
    storage: storage,
    blacklist: ["blogSearchQuery"],
  };
  
  export const {
    _setBlogQueryText
  } = blogSlice.actions;
  export default blogSlice.reducer;