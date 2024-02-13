import React from "react";

type Props = {
  title: string;
  className?: string;
  type?: "button" | "submit" | "reset";
  onCLick?: () => void;
  loading?: boolean;
  disabled?: boolean;
  icon?: React.ReactNode;
};

const CommonButton = ({
  title,
  className,
  type = "button",
  onCLick,
  icon,
  loading = false,
  disabled,
}: Props) => {
  return (
    <button
      disabled={disabled}
      onClick={!disabled ? onCLick : () => {}}
      type={type}
      className={`flex w-full items-center justify-center gap-2 rounded-lg bg-primary-blue px-[18px] py-[10px] text-base font-semibold text-white opacity-90 shadow-sm duration-300 hover:opacity-100 disabled:cursor-not-allowed disabled:opacity-75 ${
        className && className
      }`}
    >
      {loading ? (
        <div className="spinner w-full"></div>
      ) : (
        <>
          {icon} {title}
        </>
      )}
    </button>
  );
};

export default CommonButton;
