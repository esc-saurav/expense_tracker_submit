import Cookies from "js-cookie";
import {
  BaseQueryApi,
  createApi,
  FetchArgs,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";

const backendurl = process.env.BACKEND_URL || "http://localhost:8000/";

const baseQuery = fetchBaseQuery({
  baseUrl: backendurl,
  prepareHeaders: (headers) => {
    const access_token = Cookies.get("access_token");
    if (access_token) {
      headers.set("authorization", `Bearer ${access_token}`);
    }
    return headers;
  },
});

const baseQueryWithReauth = async (
  args: string | FetchArgs,
  api: BaseQueryApi,
  extraOptions: {},
) => {
  const result = await baseQuery(args, api, extraOptions);
  if (result?.error && result?.error?.status === 401) {
    const refreshResult: any = await baseQuery(
      {
        url: "auth/refresh/",
        method: "POST",
        body: {
          refresh: Cookies.get("refresh_token"),
        },
      },
      api,
      extraOptions,
    );
    if (refreshResult?.data) {
      Cookies.set("access_token", refreshResult?.data?.access);
      const result = await baseQuery(args, api, extraOptions);
      return result;
    } else {
      Cookies.remove("access_token");
      Cookies.remove("refresh_token");
    }
  }
  return result;
};

export const apiSlice = createApi({
  baseQuery: baseQueryWithReauth,

  tagTypes: ["expenses", "category"],

  endpoints: (builder) => ({}),
});
