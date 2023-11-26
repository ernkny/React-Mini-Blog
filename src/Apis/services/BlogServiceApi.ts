import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Blog } from '../../types/Blog';
import { API_URL } from '../API_URL';

export const BlogsApi = createApi({
    reducerPath: 'BlogsApi',
    baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
<<<<<<< HEAD
    tagTypes: ['Blogs'],
    endpoints: (builder) => ({
        GetBlogs: builder.query<Blog[], void>({
            query: () => '/Blogs',
            providesTags: ['Blogs']
        }),
        GetBlogDetail: builder.query<Blog, string | number>({
            query: (id) => `/Blogs/${id}`,
            providesTags: ['Blogs']
=======
    endpoints: (builder) => ({
        GetBlogs: builder.query<Blog[], void>({
            query: () => '/Blogs',
        }),
        GetBlogDetail: builder.query<Blog, string | number>({
            query: (id) => `/Blogs/${id}`,
>>>>>>> 523778f8f68e3d03c9361b8fd20f343d3671bce8
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
<<<<<<< HEAD
                ),
                invalidatesTags: ['Blogs']
            }),
            BlogDelete: builder.mutation
            ({
                query:(id)=>
                (
                    {
                        url: `/Blogs/${id}`,
                        method: 'DELETE',
                    }
                ),
                invalidatesTags: ['Blogs']
            }),
            
=======
                )
            })
>>>>>>> 523778f8f68e3d03c9361b8fd20f343d3671bce8
    })
    
});


<<<<<<< HEAD
export const { useGetBlogsQuery,useGetBlogDetailQuery,useBlogAddMutation,useBlogDeleteMutation } = BlogsApi;
=======
export const { useGetBlogsQuery,useGetBlogDetailQuery,useBlogAddMutation } = BlogsApi;
>>>>>>> 523778f8f68e3d03c9361b8fd20f343d3671bce8
