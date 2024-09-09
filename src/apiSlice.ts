// src/api/apiSlice.ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define the base API slice
export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }),
  endpoints: (builder) => ({
    getItemById: builder.query({
      query: (id) => `/todos/${id}`, // Using posts endpoint as an example
    }),
  }),
});

// Export hooks for usage in functional components
export const { useGetItemByIdQuery } = apiSlice;