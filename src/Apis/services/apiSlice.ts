import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Blog } from '../../types/Blog';
import { API_URL } from '../API_URL';

export const apiSlice = createApi({
    reducerPath: 'BlogsApi',
    baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
    tagTypes: ['Blogs'],
    endpoints: builder=> ({})
});

