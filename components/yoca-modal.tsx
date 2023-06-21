import React from "react";
import CloseIcon from "@heroicons/react/24/solid/XMarkIcon";
import { Dialog } from "@headlessui/react";

export default function MannyModal({
  state,
  children,
  handleClose,
  className = "",
}: {
  state: boolean;
  children: React.ReactNode;
  handleClose: () => void;
  className?: string;
}) {
  return (
    <Dialog open={state} onClose={handleClose} className="relative z-50">
      {/* Background */}
      <div className="fixed inset-0 bg-black/70" aria-hidden="true" />
      {/* Content Wrapper */}
      <div className="fixed top-[30%] left-[16%] flex items-center justify-center lg:p-xs">
        <Dialog.Panel
          className={`relative self-end lg:self-auto lg:h-auto lg:rounded-2xl bg-white w-[70vw] rounded-2xl ${className}`}
        >
          {children}
          <button className="z-10 absolute top-5 right-5 w-4" onClick={handleClose}>
            <CloseIcon fontSize="small" />
          </button>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}
