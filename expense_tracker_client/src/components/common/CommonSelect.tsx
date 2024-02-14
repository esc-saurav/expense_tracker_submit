"use client";
import { ArrowDownIcon } from "@/assets/icons";
import React, { useEffect, useState } from "react";

type Props = {
  optiondata: Obj[];
  className?: string;
  title: string;
  setSelectedOption: React.Dispatch<React.SetStateAction<Obj>>;
  selectedOption: Obj;
};

const CommonSelect = ({
  optiondata,
  className,
  title,
  setSelectedOption,
  selectedOption,
}: Props) => {
  const [inputValue, setInputValue] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);
  const [selectedValue, setSelectedValue] = useState<Obj>({});
  console.log(selectedValue, "setSelectedValue");

  useEffect(() => {
    setSelectedOption(selectedValue);
  }, [selectedValue.id, selectedOption]);

  return (
    <div className={`${className} h-full w-full font-medium`}>
      <div
        onClick={() => setOpen(!open)}
        className="flex w-full cursor-pointer items-center justify-between  rounded-lg border border-[#ccd5df] bg-white px-[14px] py-[10px]"
      >
        <div className="text-base font-medium text-gray-700">
          {selectedOption?.name ? selectedOption?.name : title}
        </div>
        <ArrowDownIcon
          className={`h-5 w-5 duration-200 ${open && "rotate-180"}`}
        />
      </div>
      <ul
        className={`${
          open ? "max-h-44" : "max-h-0"
        } mt-1 space-y-2 overflow-y-auto rounded bg-white transition-all duration-200 ease-in-out`}
      >
        <div className="sticky top-0 flex items-center gap-2 border bg-white px-2 py-1 ">
          <input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            type="text"
            placeholder="Search"
            className="w-full bg-white outline-none"
          />
        </div>
        {Array.isArray(optiondata) &&
          optiondata?.map((item: any) => {
            return (
              <li
                className={`flex cursor-pointer items-center gap-2 p-2 text-sm ${
                  item.name?.toLowerCase() ==
                  selectedOption?.name?.toLowerCase()
                    ? "bg-gray-200"
                    : "hover:bg-gray-100"
                } ${
                  item.name.toLowerCase().includes(inputValue.toLowerCase())
                    ? "block"
                    : "hidden"
                }`}
                key={item.id}
                onClick={() => {
                  if (item.id !== selectedOption?.id) {
                    setSelectedValue(item);
                    setOpen(false);
                    setInputValue("");
                  }
                }}
              >
                {item.name}
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default CommonSelect;
