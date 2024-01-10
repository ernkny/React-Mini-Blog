import { useSelector } from "react-redux";
import { RootState } from "../store";


export const useBlogSearchQuery = () =>
useSelector((state: RootState) => state.blogs.blogSearchQuery);