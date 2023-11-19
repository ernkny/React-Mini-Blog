import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Blog } from '../../types/Blog';
import { API_URL } from '../API_URL';

export const BlogsApi = createApi({
    reducerPath: 'BlogsApi',
    baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
    endpoints: (builder) => ({
        GetBlogs: builder.query<Blog[], void>({
            query: () => '/Blogs',
        }),
        GetBlogDetail: builder.query<Blog, string | number>({
            query: (id) => `/Blogs/${id}`,
        }),
        BlogAdd: builder.mutation
            ({
                query:(newBlog)=>
                (
                    {
                        url: '/Blogs',
                        method: 'POST',
                        body: newBlog,
                    }
                )
            })
    })
    
});


export const { useGetBlogsQuery,useGetBlogDetailQuery,useBlogAddMutation } = BlogsApi;