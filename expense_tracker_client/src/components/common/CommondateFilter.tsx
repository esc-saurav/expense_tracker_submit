import React, { useEffect, useState } from "react";
import { ArrowDownIcon } from "@/assets/icons";
import { getCurrentAndPreviousThreeMonths } from "@/utils/getMonthlyDate";

type Props = {
  setSelecteDate: React.Dispatch<React.SetStateAction<Obj>>;
};

const CommondateFilter = ({ setSelecteDate }: Props) => {
  const [activeDate, setActiveDate] = useState<Obj>({});
  const [openFilter, setOpenFilter] = useState<boolean>(false);
  const datesWithTitles = getCurrentAndPreviousThreeMonths();

  useEffect(() => {
    setSelecteDate(activeDate);
  }, [activeDate.monthTitle]);

  return (
    <div className="relative">
      <button
        onClick={() => setOpenFilter((prev) => !prev)}
        className="flex items-center gap-x-1 font-semibold text-primary-blue"
      >
        <p>{activeDate.monthTitle ?? "Filter"}</p>
        <ArrowDownIcon className="h-4 w-4 text-primary-blue" />
      </button>
      <div
        className="absolute -left-[40px] mt-2 flex w-[120px] flex-col items-center space-y-2 overflow-y-auto bg-white  shadow-md duration-300"
        style={{ height: openFilter ? "100px" : "0px" }}
      >
        {Array.isArray(datesWithTitles) &&
          datesWithTitles?.map((item, idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  setActiveDate(item);
                  setOpenFilter(false);
                }}
                className="flex w-full flex-col  border-b px-2 py-1 text-sm font-semibold text-primary-blue"
              >
                {item.monthTitle}
              </button>
            );
          })}
      </div>
    </div>
  );
};

export default CommondateFilter;
