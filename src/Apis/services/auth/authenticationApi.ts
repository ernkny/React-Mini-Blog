import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_URL } from "../../API_URL";
import { RootState } from "../../../store/store";


const authenticationApi = createApi({
  reducerPath: "authenticationApi",
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
    prepareHeaders: (headers, { getState }) => {
      const accessToken = (getState() as RootState).auth.accessToken;
      if (accessToken) {
        headers.set("authentication", `Bearer ${accessToken}`);
      }
      return headers;
    },
  }),

  tagTypes: ["auth"],
  endpoints: () => ({}),
});

export default authenticationApi;
