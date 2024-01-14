import { _setBlogQueryText } from "../Slices/blogSlice";
import { store } from "../store";


export const setQueryTextForSearch = (queryText:string): any => {
    store.dispatch((_setBlogQueryText(queryText)));
  };