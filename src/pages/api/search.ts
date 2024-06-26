import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "https://no23.lavina.tech";

export const searchApi = createApi({
  reducerPath: "searchApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    searchApiRequest: builder.mutation({
      query: ({ url, key, sign }) => ({
        url: `/books/${url}`,
        method: "GET",
        headers: {
          Key: key,
          Sign: sign,
        },
      }),
    }),
  }),
});

export const { useSearchApiRequestMutation } = searchApi;
