import { useGetAllCategoryQuery } from "@/apiSlices/category/categoryApi";
import CommonImageTitle from "@/components/common/CommonImageTitle";
import moment from "moment";
import React from "react";

type Props = {};

const YourCategories = (props: Props) => {
  const { data: allCategoryData, isLoading } = useGetAllCategoryQuery({
    limit: 1000,
    offset: 0,
  });
  return (
    <>
      <div className="flex items-center justify-between">
        <p className="font-semibold">Your Categories</p>
      </div>
      <div className="mt-5 flex max-h-[300px] w-full flex-col gap-y-6 overflow-y-auto">
        {isLoading ? (
          <div className="w-full animate-pulse space-y-4">
            <div className="h-6 rounded-md bg-gradient-to-r from-[#DBDBDB]"></div>
            <div className="h-6 rounded-md bg-gradient-to-r from-[#DBDBDB]"></div>
          </div>
        ) : Array.isArray(allCategoryData?.results) &&
          allCategoryData?.results?.length !== 0 ? (
          allCategoryData?.results?.map((item, idx) => {
            return (
              <div
                className="flex w-full flex-col justify-between gap-y-1 px-1 sm:flex-row  sm:items-center"
                key={idx}
              >
                <div className="flex items-center gap-x-2">
                  <CommonImageTitle image="" title={item.name} />
                  <p className="font-semibold text-gray-secondary">
                    {item.name}
                  </p>
                </div>
                <p className="font-semibold text-gray-fourth">
                  {moment(item?.created_at).format("LL")}
                </p>
              </div>
            );
          })
        ) : (
          "No Data avilable"
        )}
      </div>
    </>
  );
};

export default YourCategories;
