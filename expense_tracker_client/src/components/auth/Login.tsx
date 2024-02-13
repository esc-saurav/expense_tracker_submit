"use client";
import React, { useEffect } from "react";
import CommonInput from "../common/CommonInput";
import CommonButton from "../common/CommonButton";
import { useForm } from "react-hook-form";
import { useLoginMutation } from "@/apiSlices/login/LoginApi";
import Cookies from "js-cookie";
import toast from "react-hot-toast/headless";

type Props = {};

const inputfieldDetails: inputField[] = [
  {
    title: "Username",
    name: "username",
    placeholder: "Enter your username",
    type: "text",
    validation: {
      required: {
        value: true,
        message: "Opps! Enter your username",
      },
    },
  },
  {
    title: "Password",
    name: "password",
    placeholder: "Enter your password",
    type: "password",
    validation: {
      required: {
        value: true,
        message: "Opps! Enter your password",
      },
    },
  },
];

const Login = (props: Props) => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm();

  const [login, { isLoading: isLoginLoading }] = useLoginMutation();

  const onSubmit = async (data: any) => {
    try {
      const response = await login(data);
      if (response) {
        // @ts-ignore
        Cookies.set("access_token", response?.data?.access, { expires: 7 });
        // @ts-ignore
        Cookies.set("refresh_token", response?.data?.refresh, { expires: 7 });
        toast.success("Login successful");
        location.href = "/dashboard/expenses";
      }
    } catch (error) {
      toast.error("Login Failed");
      console.log(error);
    }
  };

  useEffect(() => {
    setValue("username", "demo");
    setValue("password", "demo123");
  }, []);

  return (
    <div className=" font-gilroy flex h-screen w-full items-center justify-center  px-4">
      <div className="w-full max-w-[500px] rounded-[15px] bg-gray-fifth px-6 py-8 shadow-lg sm:px-10">
        {/* <p>Welcome to Saurav Panthee Expense Tracker</p> */}
        <div>
          <form
            autoComplete="new-password"
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-6"
          >
            <div>
              <p>username: demo</p>
              <p>Password: demo123</p>
            </div>
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
            <div className="mt-4 md:mt-6">
              <CommonButton
                className="!py-2 md:!py-2.5 "
                title="Log In"
                type="submit"
                loading={isLoginLoading}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
