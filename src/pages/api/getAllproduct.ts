import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "https://no23.lavina.tech";

export const getAllProduct = createApi({
  reducerPath: "getAllProduct",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getAllProduct: builder.mutation({
      query: ({ key, sign }) => ({
        url: "/books",
        method: "GET",
        headers: {
          Key: key,
          Sign: sign,
        },
      }),
    }),
  }),
});

export const { useGetAllProductMutation } = getAllProduct;
