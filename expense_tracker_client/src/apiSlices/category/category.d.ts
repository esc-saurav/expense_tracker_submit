interface categoryPayload {
  name: "string";
}

interface CreatedBy {
  id: number;
  username: string;
  first_name: string;
  last_name: string;
}

interface Category {
  id: number;
  created_by: CreatedBy;
  name: string;
  created_at: string;
}

interface CategoryApiResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Category[];
}
