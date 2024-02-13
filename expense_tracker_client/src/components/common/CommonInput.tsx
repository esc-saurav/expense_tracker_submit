"use client";
import React, { useState } from "react";

type Prop = {
  className?: string;
  errors: any;
  register: any;
  inputfield: inputField;
  defaultValue?: any;
  inputtype?: string;
  autoFocus?: boolean;
};

const CommonInput = ({
  className,
  inputfield,
  register,
  errors,
  defaultValue,
  autoFocus = false,
}: Prop) => {
  const [type, setType] = useState<string>(inputfield.type ?? "text");

  const onclickHandler = () => {
    if (type === "text") {
      setType("password");
    } else {
      setType("text");
    }
  };

  return (
    <div className="w-full">
      <div className="space-y-[6px]">
        {inputfield.title && (
          <label
            htmlFor={inputfield.name}
            className="text-sm font-medium text-gray-700"
          >
            {inputfield.title}
            {inputfield?.validation?.required?.value && inputfield.title && (
              <span className="text-error-600">*</span>
            )}
          </label>
        )}
        <label
          htmlFor={inputfield.name}
          style={{
            boxShadow: "0px 1px 2px 0px rgba(14, 24, 41, 0.05)",
          }}
          className={`${className} relative flex w-full items-center  gap-3 overflow-hidden rounded-lg border border-[#ccd5df] bg-white px-[14px] py-[10px]`}
        >
          {inputfield.icon && <div className="text-lg">{inputfield.icon}</div>}
          <input
            autoFocus={autoFocus}
            type={type}
            id={inputfield.name}
            defaultValue={defaultValue}
            placeholder={inputfield.placeholder}
            className="w-full text-base text-gray-500 outline-none placeholder:text-sm"
            {...register(inputfield.name, inputfield.validation)}
          />
        </label>
        <div className="flex items-center justify-between">
          <div>
            {errors[inputfield.name] && (
              <p className="ml-2 text-xs text-red-500">
                {errors[inputfield.name]?.message}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommonInput;
