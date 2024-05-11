import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "https://no23.lavina.tech";

export const updateBook = createApi({
  reducerPath: "updateBook",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    updateBook: builder.mutation({
      query: ({ key,  url, sign, body }) => ({
        url: `/books/:id ${url}`,
        method: "PATCH",
        body: body,
        headers: {
          Key: key,
          Sign: sign,
        },
      }),
    }),
  }),
});

export const { useUpdateBookMutation } = updateBook;
