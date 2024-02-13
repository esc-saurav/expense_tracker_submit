"use client";
import { UserImage } from "@/assets/images";
import { SidebarRoutes } from "@/utils/routes";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import Cookies from "js-cookie";

type Props = {
  isOpen: boolean;
  setIsopen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Sidebar = ({ isOpen, setIsopen }: Props) => {
  const pathname = usePathname();
  return (
    <div
      className={`fixed left-0 z-[10] flex h-full flex-shrink-0 flex-col justify-between font-medium text-white duration-300 lg:relative ${
        isOpen
          ? "w-[320px] overflow-y-auto bg-primary-blue"
          : "w-0 overflow-hidden lg:w-[230px] lg:overflow-visible"
      }`}
    >
      <div className={`mx-auto w-full max-w-[94px] pt-24`}>
        <div className="block pb-8 lg:hidden">
          <button
            onClick={() => setIsopen((prev) => !prev)}
            className="rounded-md border px-4 "
          >
            Close
          </button>
        </div>
        <div>
          <Image src={UserImage} alt="" />
          <div className="mt-2">
            <p className="font-bold">demo</p>
            <p className="text-sm font-semibold">demo@gmail.com</p>
            <button
              onClick={() => {
                Cookies.remove("access_token");
                Cookies.remove("refresh_token");
                location.reload();
              }}
              className="text-md"
            >
              Logout
            </button>
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-y-3">
          {Array.isArray(SidebarRoutes) &&
            SidebarRoutes?.map((item, idx) => {
              return (
                <Link
                  className={`${item.link === pathname ? "underline" : ""}`}
                  key={idx}
                  href={item?.link}
                >
                  <span>{item?.title}</span>
                </Link>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
