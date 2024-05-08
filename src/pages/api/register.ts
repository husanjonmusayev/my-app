import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const registerCall = createApi({
  reducerPath: "registerCall",
  baseQuery: fetchBaseQuery({ baseUrl: "https://custom.uz/users" }),
  endpoints: (builder) => ({
    postRegister: builder.mutation({
        query: (body) => ({
          url: '/register/',
          method: 'POST', 
          body, 
        }),
      }),
  }),
});

export const usePostRegister = registerCall.endpoints.postRegister.useMutation;
