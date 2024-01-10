import { _setBlogQueryText } from "../Slices/blogSlice";
import { RootState } from "../store";
import { store } from "../store";


export const setQueryTextForSearch = (queryText:string): any => {
    store.dispatch((_setBlogQueryText(queryText)));
  };