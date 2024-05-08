import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const loginCall = createApi({
  reducerPath: "loginCall",
  baseQuery: fetchBaseQuery({ baseUrl: "https://custom.uz/users" }),
  endpoints: (builder) => ({
    postRegister: builder.mutation({
        query: (body) => ({
          url: '/login/',
          method: 'POST', 
          body, 
        }),
      }),
  }),
});

export const usePostLogin = loginCall.endpoints.postRegister.useMutation;
