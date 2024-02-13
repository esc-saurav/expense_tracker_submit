import React from "react";

type Props = {
  isModalOpen: boolean;
  closeModal: () => void;
  children: React.ReactNode;
  className?: string;
};

const CommonModal = ({
  isModalOpen,
  children,
  closeModal,
  className,
}: Props) => {
  return (
    <div
      className={`${
        isModalOpen ? "opacity-100" : "pointer-events-none opacity-0"
      } commomModalblur fixed inset-0 z-[30] flex h-screen items-center justify-center px-4 duration-300`}
    >
      <div
        className={`${className} ${
          isModalOpen ? "translate-y-0" : "translate-y-3"
        } animation-fade-in z-[30] w-full max-w-lg rounded-lg bg-white p-6 shadow-xl duration-300`}
      >
        {children}
      </div>
      {isModalOpen && (
        <div
          onClick={() => {
            closeModal();
          }}
          className="fixed inset-0 h-screen w-full"
        ></div>
      )}
    </div>
  );
};

export default CommonModal;
