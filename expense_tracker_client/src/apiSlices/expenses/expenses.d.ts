interface expensesPayload {
  amount: string;
  description: string;
  created_by: number;
  categories: number[];
}

interface AccountCategory {
  id: number;
  created_by: {
    id: number;
    username: string;
    first_name: string;
    last_name: string;
    total_expense: number;
  };
  name: string;
  created_at: string;
}

interface expense {
  id: number;
  category: AccountCategory[];
  amount: string;
  description: string;
  created_at: string;
  created_by: number;
  categories: AccountCategory[];
}

interface ExpensesApiResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: expense[];
}

interface ExpenseReportResponse {
  category__name: string;
  total_amount: number;
}
