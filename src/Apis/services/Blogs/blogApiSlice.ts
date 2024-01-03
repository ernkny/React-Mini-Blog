import { Blog } from "../../../types/Blog";
import { apiSlice } from "../ApiSlice";

export const blogApiSlice=apiSlice.injectEndpoints({
    endpoints:builder=>({
        GetBlogs: builder.query<Blog[], void>({
            query: () => '/Blogs',
            providesTags: ['Blogs']
        }),
        GetBlogDetail: builder.query<Blog, string | number>({
            query: (id) => `/Blogs/${id}`,
            providesTags: ['Blogs']
        }),
        BlogAdd: builder.mutation({
            query: (newBlog) => ({
                url: '/Blogs',
                method: 'POST',
                body: newBlog,
            }),
            invalidatesTags: ['Blogs']
        }),
        BlogUpdate: builder.mutation({
            query: (updatedBlog) => ({
                url: `/Blogs/${updatedBlog.id}`,
                method: 'PATCH',
                body: updatedBlog,
            }),
            invalidatesTags: ['Blogs']
        }),
        BlogDelete: builder.mutation({
            query: (id) => ({
                url: `/Blogs/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Blogs']
        }),
    })

})

export const { useGetBlogsQuery,useGetBlogDetailQuery,useBlogAddMutation,useBlogDeleteMutation, useBlogUpdateMutation} = blogApiSlice;