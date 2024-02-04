import { User } from "../../../types/User";
import { apiSlice } from "../apiSlice";


export const userApiSlice=apiSlice.injectEndpoints({
    endpoints:builder=>({
        getUsers: builder.query<User[], number>({
            query: (pageNumber) => `/Users?_start=${(pageNumber*8)-8}&_end=${pageNumber*8}`,
            providesTags: ['Users']
        }),
        getUser: builder.query<User, string>({
            query: (userId) => `/Users?id=${userId}`,
            providesTags: ['Users']
        }),
    })
})

export const { useGetUsersQuery } = userApiSlice;