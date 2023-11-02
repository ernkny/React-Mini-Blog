import { GET_BLOG_API } from "./API_URL";

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