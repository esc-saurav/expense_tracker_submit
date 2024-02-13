"use client";
import { HamburgerIcon } from "@/assets/icons";
import Sidebar from "@/components/static/Sidebar";
import React, { useState } from "react";

type Props = {
  children: React.ReactNode;
};

const layout = ({ children }: Props) => {
  const [isOpen, setIsopen] = useState<boolean>(false);

  return (
    <div className=" flex !h-screen overflow-y-auto">
      <Sidebar isOpen={isOpen} setIsopen={setIsopen} />
      <div className="h-full flex-1 overflow-auto p-4">
        <div className="h-full overflow-y-auto rounded-2xl bg-white">
          <button
            onClick={() => setIsopen((prev) => !prev)}
            className="lg:hidden"
          >
            <HamburgerIcon className="h-12 w-12" />
          </button>
          {children}
        </div>
        {/* <div className="flex-1 p-4">
        <div className="h-full overflow-y-auto rounded-2xl bg-white">
          {children}
        </div> */}
      </div>
    </div>
  );
};

export default layout;
