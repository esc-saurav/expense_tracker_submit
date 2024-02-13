"use client";
import React, { useState } from "react";
import CommonTitle from "../common/CommonTitle";
import TopExpenses from "./integrate/TopExpenses";
import TodaysExpenses from "./integrate/TodaysExpenses";
import CommonButton from "../common/CommonButton";
import { PlusIcon } from "@/assets/icons";
import CommonModal from "../common/CommonModal";
import AddExpensesForm from "./integrate/AddExpensesForm";
import WhereAllMoneyGoes from "../whereallmoneygoes/WhereAllMoneyGoes";

type Props = {};

const Expenses = (props: Props) => {
  const [openAddExpenseModal, setOpenExpenseModal] = useState<boolean>(false);
  return (
    <div className="h-full @container">
      <div className="flex h-full flex-col overflow-y-auto @6xl:flex-row">
        <div className="w-full p-6 md:px-16 md:py-12 lg:max-w-[720px]">
          <CommonTitle title="Expenses">
            <CommonButton
              onCLick={() => setOpenExpenseModal((prev) => !prev)}
              icon={<PlusIcon />}
              className="flex-row-reverse bg-white p-1 font-semibold !text-primary-blue !shadow-none"
              title="Add Expense"
            />
          </CommonTitle>
          <div className="py-12">
            <TopExpenses />
          </div>
          <div className="border border-b-0 border-l-0 border-r-0 border-t border-[#00000008] py-4">
            <TodaysExpenses />
          </div>
          <CommonModal
            isModalOpen={openAddExpenseModal}
            closeModal={() => setOpenExpenseModal(false)}
          >
            <AddExpensesForm setOpenExpenseModal={setOpenExpenseModal} />
          </CommonModal>
        </div>
        <div className="flex-1">
          <WhereAllMoneyGoes />
        </div>
      </div>
    </div>
  );
};

export default Expenses;
