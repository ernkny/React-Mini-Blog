import authenticationApi from "./authenticationApi";
import { LoginRequest, LoginResponse, RegisterRequest, RegisterResponse } from "./models";

  export const authApi = authenticationApi.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation<LoginResponse, LoginRequest>({
            query: (body) => ({
              url: "/Users",
              method: "POST",
              body,
            }),
            invalidatesTags: ["auth"],
          }),
          register: builder.mutation<RegisterResponse, Partial<RegisterRequest>>({
            query: (body) => ({
              url: "register",
              method: "POST",
              body,
            }),
            invalidatesTags: ["auth"],
          }),
    }),
  });
  
  export const { useLoginMutation } = authApi;
  
  export default authApi;
  