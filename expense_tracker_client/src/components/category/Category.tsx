"use client";
import React, { useState } from "react";
import CommonTitle from "../common/CommonTitle";
import CommonButton from "../common/CommonButton";
import { PlusIcon } from "@/assets/icons";
import CommonModal from "../common/CommonModal";
import WhereAllMoneyGoes from "../whereallmoneygoes/WhereAllMoneyGoes";
import TopExpenseByCategory from "./integrate/TopExpenseByCategory";
import YourCategories from "./integrate/YourCategories";
import AddcategoryModal from "./integrate/AddcategoryModal";

type Props = {};

const Category = (props: Props) => {
  const [openAddCategoryModal, setOpenCategoryModal] = useState<boolean>(false);
  return (
    <div className="h-full @container">
      <div className="flex h-full flex-col overflow-y-auto @6xl:flex-row">
        <div className="w-full p-6 @6xl:max-w-[720px] md:px-16 md:py-12">
          <CommonTitle title="Category">
            <CommonButton
              onCLick={() => setOpenCategoryModal((prev) => !prev)}
              icon={<PlusIcon />}
              className="flex-row-reverse bg-white p-1 font-semibold !text-primary-blue !shadow-none"
              title="Add Category"
            />
          </CommonTitle>
          <div className="py-12">
            <YourCategories />
          </div>
          <div className="py-4">
            <TopExpenseByCategory />
          </div>
          <CommonModal
            isModalOpen={openAddCategoryModal}
            closeModal={() => setOpenCategoryModal(false)}
          >
            <AddcategoryModal setOpenCategoryModal={setOpenCategoryModal} />
          </CommonModal>
        </div>
        <div className="flex-1">
          <WhereAllMoneyGoes />
        </div>
      </div>
    </div>
  );
};

export default Category;
