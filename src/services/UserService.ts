import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { IUser } from "../models/IUser";

export const userApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://617a474ccb1efe001700fd60.mockapi.io/api/v1",
  }),
  endpoints: (builder) => ({
    fetchUsers: builder.query<IUser[], void>({
      query: () => "/users",
    }),
    createUser: builder.mutation<IUser, IUser>({
      query: (user) => ({
        url: "/users",
        method: "POST",
        body: user,
      }),
    }),
  }),
});

export const { useFetchUsersQuery, useCreateUserMutation } = userApi;
