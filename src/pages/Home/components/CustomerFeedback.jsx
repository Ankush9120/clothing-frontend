import React from 'react';
import { useSelector } from 'react-redux';
import { MdKeyboardArrowLeft as ArrowLeft, MdKeyboardArrowRight as ArrowRight } from "react-icons/md";
import Commas from "/assets/images/commas.png";

const CustomerFeedback = () => {
  const feedback = useSelector((state) => state.products.customerFeedback);

  return (
    <div className="text-sm py-[32px] px-[18px]">
      <div className="flex justify-center relative before:[''] before:h-[1px] before:w-[90%] before:absolute before:bg-secondary-100 before:bottom-0 pb-2">
        <p>
          <span className="text-[18px] leading-[18px]">What our</span>
          <span className="text-[32px] leading-[44px] ml-2">Customer says</span>
        </p>
      </div>
      <p className="text-[12px] mt-2.5 text-center">We value our customer&apos;s feedback to provide the best service.</p>
      <div className="flex gap-[13px] relative my-6">
        <img src={feedback?.image} alt="" className="h-[160px]" />
        <div className="grid gap-1.5">
          <img src={Commas} className="h-5" alt="commas" />
          <p className="leading-[19px]">{feedback?.comment}</p>
          <div>
            <p className="text-[12px]">{feedback?.name}</p>
            <p className="text-[10px]">{feedback?.role}</p>
          </div>
        </div>
      </div>
      <div className="mt-6 *:h-6 *:w-[26px] *:text-primary-100 *:border-[1px] *:border-solid *:border-primary-100 *:grid *:place-items-center *:rounded-[7px] flex justify-end gap-3">
        <button>
          <ArrowLeft />
        </button>
        <button>
          <ArrowRight />
        </button>
      </div>
    </div>
  );
};

export default CustomerFeedback;

