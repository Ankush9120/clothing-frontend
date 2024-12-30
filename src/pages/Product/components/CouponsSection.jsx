import React from 'react';
import { BrandLogo } from "../../../libs/icons";

const CouponsSection = () => {
  const coupons = [
    { code: "LRFLAT10", description: "Extra 10% off", details: "Get extra 10% off on your first purchase. Maximum Discount." },
    { code: "LRNEW15", description: "Extra 15% off", details: "Get extra 15% off on selected products." },
  ];

  return (
    <div className="py-3 pl-[18px] bg-primary-600">
      <span className="mb-1">Coupons</span>
      <p className="text-secondary-100 text-[12px] mb-3 font-albert">Apply any of these coupons on bag during checkout</p>
      <div className="flex gap-3 overflow-x-auto pr-[18px]">
        {coupons.map((coupon, idx) => (
          <div key={idx} className="border border-primary-300 rounded-lg bg-primary-500 min-w-[285px] max-w-[285px]">
            <div className="p-3 flex gap-2.5">
              <div className="flex items-center">
                <img src={BrandLogo} alt="" className="min-w-[44px] max-w-[44px] aspect-square" />
              </div>
              <div>
                <h4 className="text-sm">{coupon.description}</h4>
                <p className="text-secondary-100 text-[12px] font-albert line-clamp-2 opacity-60">{coupon.details}</p>
              </div>
            </div>
            <div className="text-sm flex justify-between px-2.5 py-[5px] border-t border-primary-300">
              <div className="text-secondary-100">{coupon.code}</div>
              <button className="text-primary-100 font-medium font-albert">Copy Code</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CouponsSection;

