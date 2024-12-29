import React from "react";
import AnimatedModal from "../../../components/AnimatedModal";
import { MdClose } from "react-icons/md";
import { CancelledColoredIcon } from "../../../libs/icons";

const CancellationModal = ({ isOpen, onClose, onConfirm }) => {
  return (
    <AnimatedModal isOpen={isOpen} onClose={onClose} className="font-albert">
      <div className="flex justify-end mb-4 absolute top-4 right-4">
        <button onClick={onClose}>
          <MdClose className="w-6 h-6 text-secondary-100" />
        </button>
      </div>
      <div className="flex flex-col text-center mb-8 w-full">
        <div className="w-12 h-12 rounded-full bg-red-100/20 border-4 border-red-100/10 flex items-center justify-center shadow-[0_0_0_4px] shadow-red-100/10 mb-3">
          <div className="w-12 h-12 rounded-full flex items-center justify-center">
            <img src={CancelledColoredIcon} alt="" />
          </div>
        </div>
        <h3 className="text-left w-full text-lg font-semibold leading-[28px] mb-1">Cancel Order</h3>
        <p className="text-left text-sm w-full leading-5">Are you sure you want to cancel this order?</p>
      </div>
      <div className="space-y-3">
        <button onClick={onConfirm} className="w-full p-2.5 bg-red-100 text-white rounded-md font-semibold">
          Yes, Cancel
        </button>
        <button onClick={onClose} className="w-full p-2.5 border border-colorBorder-300 rounded-md font-semibold text-secondary-100">
          No, Keep It
        </button>
      </div>
    </AnimatedModal>
  );
};

export default CancellationModal;
