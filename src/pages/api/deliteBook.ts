import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "https://no23.lavina.tech";

export const deleteApi = createApi({
  reducerPath: "deleteApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    deleteBook: builder.mutation({
      query: ({ url, key, sign }) => ({
        url: `/books/${url}`,
        method: "DELETE",
        headers: {
          Key: key,
          Sign: sign,
        },
      }),
    }),
  }),
});

export const { useDeleteBookMutation } = deleteApi;
