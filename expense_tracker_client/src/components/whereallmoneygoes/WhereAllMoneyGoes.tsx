import React from "react";
import ProgressMeter from "../common/ProgressMeter";
import { useGetExpenseReportQuery } from "@/apiSlices/expenses/ExpensesApi";

type Props = {};

const WhereAllMoneyGoes = (props: Props) => {
  const { data: expenseReportData, isLoading } = useGetExpenseReportQuery({});

  return (
    <div className="flex h-full justify-center bg-gray-fifth p-6 md:px-12 md:py-12">
      <div className="flex w-full flex-col gap-y-8">
        <p className="text-xl font-semibold">where your money go?</p>
        <div className="space-y-4">
          {isLoading ? (
            <div className="w-full animate-pulse space-y-4">
              <div className="h-6 rounded-md bg-gradient-to-r from-[#DBDBDB]"></div>
              <div className="h-6 rounded-md bg-gradient-to-r from-[#DBDBDB]"></div>
            </div>
          ) : Array.isArray(expenseReportData) &&
            expenseReportData.length !== 0 ? (
            expenseReportData?.map((item, idx) => {
              return (
                <div key={idx}>
                  <div className="flex items-center justify-between">
                    <p className="font-semibold">{item?.categories__name}</p>
                    <p className="font-semibold">{item?.total_amount}</p>
                  </div>
                  <ProgressMeter
                    progress={
                      (item?.total_amount / item?.total_user_expense) * 100
                    }
                  />
                </div>
              );
            })
          ) : (
            "NO Data Available"
          )}
        </div>
      </div>
    </div>
  );
};

export default WhereAllMoneyGoes;
