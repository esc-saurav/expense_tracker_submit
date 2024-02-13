import { apiSlice } from "../apiSlice";

const LoginApiService = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<LoginApiResponse, LoginPayload>({
      query: (data) => ({
        url: "auth/login/",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useLoginMutation } = LoginApiService;
