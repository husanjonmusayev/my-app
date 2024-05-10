import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "https://no23.lavina.tech";

export const loginApi = createApi({
  reducerPath: "loginApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: ({ key, sign }) => ({
        url: "/myself",
        method: "GET",
        headers: {
          Key: key,
          Sign: sign,
        },
      }),
    }),
  }),
});

export const { useLoginMutation } = loginApi;
