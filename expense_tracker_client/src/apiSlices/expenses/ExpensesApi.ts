import { apiSlice } from "../apiSlice";

const expensesApiService = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createExpense: builder.mutation<expense, any>({
      query: (formData) => ({
        url: "expense/create/",
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["expenses"],
    }),
    getExpenseList: builder.query<
      ExpensesApiResponse,
      {
        daterange_after?: string;
        daterange_before?: string;
        limit?: number;
        offset?: number;
      }
    >({
      query: ({ daterange_after, daterange_before, limit, offset }) => ({
        url: "expense/list/",
        method: "GET",
        params: { daterange_after, daterange_before, limit, offset },
      }),
      providesTags: ["expenses"],
    }),
    getExpenseReport: builder.query<
      ExpenseReportResponse,
      {
        daterange_after?: string;
        daterange_before?: string;
      }
    >({
      query: () => ({
        url: "expense/report/",
        method: "GET",
      }),
      providesTags: ["expenses"],
    }),
  }),
});

export const {
  useCreateExpenseMutation,
  useGetExpenseListQuery,
  useGetExpenseReportQuery,
} = expensesApiService;
