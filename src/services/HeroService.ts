import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IHero } from "../models/IHero";
import { DOTA_API_KEY } from "../api/apiKey";

export const heroApi = createApi({
  reducerPath: "heroApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.opendota.com/api" }),
  endpoints: (builder) => ({
    getHeroStats: builder.query<IHero[], IHero[]>({
      query: () => `/heroStats?${DOTA_API_KEY}`,
    }),
  }),
});

export const { useGetHeroStatsQuery } = heroApi;
