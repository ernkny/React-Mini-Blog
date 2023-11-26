import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Blog } from '../../types/Blog';
import { API_URL } from '../API_URL';

export const BlogsApi = createApi({
    reducerPath: 'BlogsApi',
    baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
    tagTypes: ['Blogs'],
    endpoints: (builder) => ({
        GetBlogs: builder.query<Blog[], void>({
            query: () => '/Blogs',
            providesTags: ['Blogs']
        }),
        GetBlogDetail: builder.query<Blog, string | number>({
            query: (id) => `/Blogs/${id}`,
            providesTags: ['Blogs']
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
            
    })
    
});


export const { useGetBlogsQuery,useGetBlogDetailQuery,useBlogAddMutation,useBlogDeleteMutation } = BlogsApi;