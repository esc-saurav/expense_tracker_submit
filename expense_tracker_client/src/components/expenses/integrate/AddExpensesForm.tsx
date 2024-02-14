"use client";
import { useGetAllCategoryQuery } from "@/apiSlices/category/categoryApi";
import { useCreateExpenseMutation } from "@/apiSlices/expenses/ExpensesApi";
import CommonButton from "@/components/common/CommonButton";
import CommonInput from "@/components/common/CommonInput";
import CommonSelect from "@/components/common/CommonSelect";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

type Props = {
  setOpenExpenseModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const inputfieldDetails: inputField[] = [
  {
    title: "Amount",
    name: "amount",
    placeholder: "Enter Amount",
    type: "number",
    validation: {
      required: {
        value: true,
        message: "Opps! Enter Amount.",
      },
    },
  },
  {
    title: "Description",
    name: "description",
    placeholder: "Enter Description.",
    type: "text",
    validation: {
      required: {
        value: true,
        message: "Opps! Enter Description.",
      },
    },
  },
];

const AddExpensesForm = ({ setOpenExpenseModal }: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [selectedOption, setSelectedOption] = useState<Obj>({});
  console.log(selectedOption);

  const { data: allCategoriesData } = useGetAllCategoryQuery({
    limit: 1000,
    offset: 0,
  });
  const [createExpense, { isLoading: isExpenseCreateLoading }] =
    useCreateExpenseMutation();

  const onSubmit = async (data: any) => {
    try {
      const formData = new FormData();
      formData.append("amount", data?.amount);
      formData.append("description", data?.description);
      formData.append("created_by", selectedOption?.created_by?.id);
      formData.append("categories", selectedOption?.id);
      const response = await createExpense(formData);
      if (response) {
        //@ts-ignore
        if (response?.data) {
          setSelectedOption({});
          reset();
          setOpenExpenseModal(false);
          toast.success("expense created successfully");
        } else {
          toast.error("expense creation failed");
        }
      }
    } catch (err) {
      console.log(err);
      toast.error("expense creation failed");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1 className="text-lg font-semibold">ADD Expenses</h1>
        <div className="mt-4 space-y-2">
          <CommonInput
            errors={errors}
            inputfield={inputfieldDetails[0]}
            register={register}
          />
          <CommonInput
            errors={errors}
            inputfield={inputfieldDetails[1]}
            register={register}
          />
          <div>
            <p className="text-sm font-medium text-gray-700">Category</p>
            <CommonSelect
              title="Select Category"
              className="mt-2"
              selectedOption={selectedOption}
              setSelectedOption={setSelectedOption}
              optiondata={allCategoriesData?.results ?? []}
            />
          </div>
        </div>
        <div className="mt-4 flex justify-end md:mt-6">
          <CommonButton
            // disabled={selectedcategory?.id === undefined}
            className="w-fit !py-2 md:!py-2.5"
            title="Add Expenses"
            type="submit"
            loading={isExpenseCreateLoading}
          />
        </div>
      </form>
    </div>
  );
};

export default AddExpensesForm;
