import { useGetExpenseReportQuery } from "@/apiSlices/expenses/ExpensesApi";
import CommonImageTitle from "@/components/common/CommonImageTitle";
import React from "react";

type Props = {};

const TopExpenseByCategory = (props: Props) => {
  const { data: expensesReport, isLoading } = useGetExpenseReportQuery({});
  return (
    <>
      <div className="flex items-center justify-between">
        <p className="font-semibold">Top Expenses By Category</p>
      </div>
      <div className="mt-5 flex max-h-[180px] w-full flex-col gap-y-6 overflow-y-auto px-2">
        {isLoading ? (
          <div className="w-full animate-pulse space-y-4">
            <div className="h-6 rounded-md bg-gradient-to-r from-[#DBDBDB]"></div>
            <div className="h-6 rounded-md bg-gradient-to-r from-[#DBDBDB]"></div>
          </div>
        ) : Array.isArray(expensesReport) && expensesReport.length !== 0 ? (
          expensesReport?.map((item) => {
            return (
              <div
                className="flex w-full flex-col justify-between gap-y-1  sm:flex-row sm:items-center"
                key={item.categories__name}
              >
                <div className="gap-x- flex items-center gap-x-2">
                  <CommonImageTitle image="" title={item.categories__name} />
                  <div className="flex flex-col gap-y-1">
                    <p className="font-semibold text-gray-secondary">
                      {item.categories__name}
                    </p>
                  </div>
                </div>
                <div className="font-semibold">{item.total_amount}</div>
              </div>
            );
          })
        ) : (
          "No Data Found"
        )}
      </div>
    </>
  );
};

export default TopExpenseByCategory;
