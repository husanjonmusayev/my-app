import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const registerCall = createApi({
  reducerPath: "registerCall",
  baseQuery: fetchBaseQuery({ baseUrl: "https://no23.lavina.tech" }),
  endpoints: (builder) => ({
    postRegister: builder.mutation({
      query: (body) => ({
        url: "/signup",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const usePostRegister = registerCall.endpoints.postRegister.useMutation;
