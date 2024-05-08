import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const searchApi = createApi({
  reducerPath: "search",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://superhero-search.p.rapidapi.com/api/",
  }),
  endpoints: (builder) => ({
    getSearchByName: builder.query({
      query: (name) => ({
        url: `?hero=${name}`,
        method: "GET",
        headers: {
          "X-RapidAPI-Key": "ae845e06f3msh69b7ccb2e4c8d4ap18cdc1jsn2b14c97e1b9b",
          "X-RapidAPI-Host": "superhero-search.p.rapidapi.com",
        },
      }),
    }),
  }),
});

export const { useGetSearchByNameQuery } = searchApi;
