import { UserDetail } from "../../../types/UserDetail";
import { apiSlice } from "../apiSlice";

export const userDetailApiSlice=apiSlice.injectEndpoints({
    endpoints:builder=>({
        getAllUserDetail:builder.query<UserDetail[],number>({
            query: (pageNumber) => `/UserDetails?_start=${(pageNumber*8)-8}&_end=${pageNumber*8}`,
            providesTags: ['UserDetails']
        }),
        getUserDetail:builder.query<UserDetail[],string>({
            query: (userId) => `/UserDetails?UserId=${userId}`,
            providesTags: ['UserDetails']
        }),
    })
    
})

export const { useGetAllUserDetailQuery,useGetUserDetailQuery } = userDetailApiSlice;