import { User } from "../../../types/User";
import { apiSlice } from "../ApiSlice";


export const userApiSlice=apiSlice.injectEndpoints({
    endpoints:builder=>({
        getUsers: builder.query<User[], number>({
            query: (pageNumber) => `/Users?_start=${(pageNumber*8)-8}&_end=${pageNumber*8}`,
            providesTags: ['Users']
        }),
    })
})

export const { useGetUsersQuery } = userApiSlice;