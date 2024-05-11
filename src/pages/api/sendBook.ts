import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "https://no23.lavina.tech";

export const senBook = createApi({
  reducerPath: "senBook",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    senBook: builder.mutation({
      query: ({ key, sign, body }) => ({
        url: "/books",
        method: "POST",
        body: body,
        headers: {
          Key: key,
          Sign: sign,
        },
      }),
    }),
  }),
});

export const { useSenBookMutation } = senBook;
