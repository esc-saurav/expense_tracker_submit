import React from "react";

type Props = {
  progress?: number;
};

const ProgressMeter = ({ progress = 0 }: Props) => {
  return (
    <div className="bg-gray-progress my-2 h-1.5 w-full rounded-md">
      <div
        style={{
          width: `${progress}%`,
          transition: "width 0.1s",
        }}
        className={`bg-primary-blue h-full rounded-md duration-300`}
      ></div>
    </div>
  );
};

export default ProgressMeter;
