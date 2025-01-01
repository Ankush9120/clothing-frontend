import React from 'react';

const OutlineButton = ({ children }) => {
  return (
    <button className="w-[118px] h-[32px] flex justify-center items-center text-primary-100 border-[1px] border-solid border-primary-100 gap-[15px] rounded-[7.3px] mx-auto text-sm">
      {children} <img src="/assets/images/arrow-colored.png" className="h-[7px]" alt="colored arrow" />
    </button>
  );
};

export default OutlineButton;

