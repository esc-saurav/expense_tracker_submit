import { apiSlice } from "../apiSlice";

const categoryApiService = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllCategory: builder.query<
      CategoryApiResponse,
      { limit: number; offset: number }
    >({
      query: () => ({
        url: "category/list/",
        method: "GET",
      }),
      providesTags: ["category"],
    }),
    getCategory: builder.query<Category, { id: string }>({
      query: ({ id }) => ({
        url: `category/${id}`,
        method: "GET",
      }),
      providesTags: ["category"],
    }),
    addCategory: builder.mutation<Category, categoryPayload>({
      query: (body) => ({
        url: "category/create/",
        method: "POST",
        body: body,
      }),
      invalidatesTags: ["category"],
    }),
    editCategory: builder.mutation<
      { name: string },
      { id: number; data: string }
    >({
      query: ({ id, data }) => ({
        url: `category/create/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["category"],
    }),
  }),
});

export const {
  useGetAllCategoryQuery,
  useLazyGetCategoryQuery,
  useAddCategoryMutation,
  useEditCategoryMutation,
} = categoryApiService;
