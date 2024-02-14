import { useAddCategoryMutation } from "@/apiSlices/category/categoryApi";
import CommonButton from "@/components/common/CommonButton";
import CommonInput from "@/components/common/CommonInput";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

type Props = {
  setOpenCategoryModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const inputfieldDetails: inputField[] = [
  {
    title: "Category Name",
    name: "name",
    placeholder: "Enter Category Name",
    type: "text",
    validation: {
      required: {
        value: true,
        message: "Opps! Enter Category Name",
      },
    },
  },
];

const AddcategoryModal = ({ setOpenCategoryModal }: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [addCategory, { isLoading: isAddCategoryLoading }] =
    useAddCategoryMutation();

  const onSubmit = async (data: any) => {
    try {
      const response = await addCategory(data);
      if (response) {
        //@ts-ignore
        if (response?.data) {
          reset();
          setOpenCategoryModal(false);
          toast.success("category created successfully");
        } else {
          toast.error("Category creation failed");
        }
      }
    } catch (err) {
      console.log(err);
      toast.error("category creation failed");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1 className="text-lg font-semibold">ADD Category</h1>
        <div className="mt-4">
          <CommonInput
            errors={errors}
            inputfield={inputfieldDetails[0]}
            register={register}
          />
        </div>
        <div className="mt-4 flex justify-end md:mt-6">
          <CommonButton
            className="w-fit !py-2 md:!py-2.5"
            title="Add Category"
            type="submit"
            loading={isAddCategoryLoading}
          />
        </div>
      </form>
    </div>
  );
};

export default AddcategoryModal;
