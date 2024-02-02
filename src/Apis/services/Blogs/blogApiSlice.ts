import { Blog } from "../../../types/Blog";
import { apiSlice } from "../ApiSlice";
import { BlogsWithUserIdRequest } from "./Models/BlogsWithUserIdRequest";

export const blogApiSlice=apiSlice.injectEndpoints({
    endpoints:builder=>({
        GetBlogs: builder.query<Blog[], number>({
            query: (pageNumber) => `/Blogs?_start=${(pageNumber*10)-10}&_end=${pageNumber*10}`,
            providesTags: ['Blogs']
        }),
        GetBlogsWithUserId: builder.query<Blog[], BlogsWithUserIdRequest>({
            query: (request:BlogsWithUserIdRequest) => `/Blogs?UserId=${request.UserId}&_start=${(request.pageNumber*10)-10}&_end=${request.pageNumber*10}`,
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

export const { useGetBlogsQuery,useGetBlogDetailQuery,useBlogAddMutation,useBlogDeleteMutation, useBlogUpdateMutation,useGetBlogsWithUserIdQuery} = blogApiSlice;