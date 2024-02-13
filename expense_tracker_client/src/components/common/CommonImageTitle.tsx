import React from "react";

type Props = {
  image: string;
  title: string;
  className?: string;
};

const CommonImageTitle = ({ image, title = "", className = "" }: Props) => {
  return image ? (
    <img
      src={image}
      alt=""
      className={`${className} h-10 w-10 rounded-full object-cover`}
    />
  ) : title ? (
    <div
      className={`bg-primary-pink grid h-10 w-10 place-content-center rounded-full font-bold uppercase text-white ${className}`}
    >
      {title.split(" ").length > 1
        ? title?.split(" ")[0].charAt(0) + title?.split(" ")[1].charAt(0)
        : title?.charAt(0) + title?.charAt(1) ?? ""}
    </div>
  ) : (
    <div className={`bg-primary-300 h-10 w-10 rounded-full`}></div>
  );
};

export default CommonImageTitle;
