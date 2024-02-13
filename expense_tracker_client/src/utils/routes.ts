export interface SidebarRoutes {
  title: string;
  link: string;
}

export const SidebarRoutes: SidebarRoutes[] = [
  {
    title: "Expenses",
    link: "/dashboard/expenses",
  },
  {
    title: "Category",
    link: "/dashboard/category",
  },
];
