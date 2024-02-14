"use client";
import { useGetExpenseListQuery } from "@/apiSlices/expenses/ExpensesApi";
import { TagIcon } from "@/assets/icons";
import CommonImageTitle from "@/components/common/CommonImageTitle";
import CommondateFilter from "@/components/common/CommondateFilter";
import moment from "moment";
import React, { useState } from "react";

type Props = {};

const TopExpenses = (props: Props) => {
  const [selectedDate, setSelecteDate] = useState<Obj>({});
  const { data: topExpensesData, isLoading } = useGetExpenseListQuery({
    daterange_after: selectedDate?.startDate ?? "",
    daterange_before: selectedDate?.endDate ?? "",
  });

  // console.log(selectedDate, "selecteddate");

  return (
    <>
      <div className="flex items-center justify-between">
        <p className="font-semibold">Top Expenses</p>
        <CommondateFilter setSelecteDate={setSelecteDate} />
      </div>
      <div className="mt-5 flex max-h-[320px] w-full flex-col gap-y-6 overflow-y-auto px-2">
        {isLoading ? (
          <div className="w-full animate-pulse space-y-4">
            <div className="h-6 rounded-md bg-gradient-to-r from-[#DBDBDB]"></div>
            <div className="h-6 rounded-md bg-gradient-to-r from-[#DBDBDB]"></div>
          </div>
        ) : Array.isArray(topExpensesData?.results) &&
          topExpensesData?.results.length !== 0 ? (
          topExpensesData?.results?.map((item, idx) => {
            return (
              <div
                className="flex w-full flex-col justify-between gap-y-1  sm:flex-row sm:items-center"
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
                <div className="font-semibold">{item.amount}</div>
              </div>
            );
          })
        ) : (
          "No Data..."
        )}
      </div>
    </>
  );
};

export default TopExpenses;
