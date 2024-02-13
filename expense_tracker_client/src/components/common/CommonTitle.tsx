import React from "react";

type Props = {
  title: string;
  className?: string;
  children?: React.ReactNode;
};

const CommonTitle = ({ title, className, children }: Props) => {
  return (
    <div className="flex w-full items-center justify-between">
      <div
        className={`text-2xl font-semibold text-black ${className && className}`}
      >
        {title}
      </div>
      <div>{children}</div>
    </div>
  );
};

export default CommonTitle;
