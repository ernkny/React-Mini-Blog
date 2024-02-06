import { User } from "../../../types/User";
import authenticationApi from "./authenticationApi";
import { LoginRequest, LoginResponse, RegisterRequest, RegisterResponse } from "./models";

  export const authApi = authenticationApi.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation<LoginResponse, LoginRequest>({
            query: (body) => ({
              url: `/Users?Username=${body.username}&Password=${body.password}`,
              method: "GET",
            }),
            invalidatesTags: ["auth"],
          }),
          register: builder.mutation<RegisterResponse, Partial<RegisterRequest>>({
            query: (body) => ({
              url: "/Users",
              method: "POST",
              body,
            }),
            invalidatesTags: ["auth"],
          }),
          getAllUsersFromAuth: builder.query<User[], void>({
            query: () => `/Users`,
            providesTags: ['auth']
        }),
    }),
  });
  
  export const { useLoginMutation,useRegisterMutation,useGetAllUsersFromAuthQuery } = authApi;
  
  export default authApi;
  