import { GET_BLOG_API } from "./API_URL";
import {Blog} from '../types/Blog';

export const getBlogs = async () => {
    try {
      const response = await fetch(GET_BLOG_API);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("API hatası:", error);
      return [];
    }
  };

  export const getBlogDetail = async (id:number) => {
    try {
      const response = await fetch(`${GET_BLOG_API}/${id}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("API hatası:", error);
      return [];
    }
  };

  export const BlogAddAsync = async (blog: Blog, onSuccess: (message: string) => void, onError: (message: string) => void) => {
    try {
       await fetch(`${GET_BLOG_API}`, {
        method: 'POSsT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(blog),
      })
      onSuccess('Blog başarıyla eklendi!');
    } catch (error) {
      onError('Blog eklenirken bir hata oluştu: ' + error);
    }
  };