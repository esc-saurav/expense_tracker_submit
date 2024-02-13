import { useGetExpenseListQuery } from "@/apiSlices/expenses/ExpensesApi";
import { TagIcon } from "@/assets/icons";
import CommonImageTitle from "@/components/common/CommonImageTitle";
import moment from "moment";
import React from "react";

type Props = {};

const TodaysExpenses = (props: Props) => {
  let today = new Date();
  let formattedDate = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;

  const { data: topExpensesData, isLoading } = useGetExpenseListQuery({
    limit: 1000,
    offset: 0,
    daterange_after: formattedDate,
    daterange_before: formattedDate,
  });

  return (
    <>
      <div className="flex items-center justify-between">
        <p className="font-semibold">Today’s Expenses</p>
      </div>
      <div className="mt-5 flex w-full flex-col gap-y-6">
        {isLoading ? (
          <div className="w-full animate-pulse space-y-4">
            <div className="h-6 rounded-md bg-gradient-to-r from-[#DBDBDB]"></div>
            <div className="h-6 rounded-md bg-gradient-to-r from-[#DBDBDB]"></div>
          </div>
        ) : Array.isArray(topExpensesData?.results) &&
          topExpensesData?.results?.length !== 0 ? (
          topExpensesData?.results?.map((item, idx) => {
            return (
              <div
                className="flex w-full flex-col justify-between gap-y-1 sm:flex-row sm:items-center"
                key={idx}
              >
                <div className="gap-x- flex items-center gap-x-2">
                  <CommonImageTitle image="" title={item?.description} />
                  <div className="flex flex-col gap-y-1">
                    <p className="font-semibold text-gray-secondary">
                      {item?.description}
                    </p>
                    <div className="flex items-center gap-x-1">
                      <p className="text-xs font-bold text-gray-third">
                        {moment(item?.created_at).format("LT")}
                      </p>
                      <div className="flex items-center gap-x-0.5">
                        <TagIcon />
                        <p className="text-xs font-bold text-gray-third">
                          {item?.categories[0]?.name}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="font-semibold">{item?.amount}</div>
              </div>
            );
          })
        ) : (
          "No Data Available..."
        )}
      </div>
    </>
  );
};

export default TodaysExpenses;
