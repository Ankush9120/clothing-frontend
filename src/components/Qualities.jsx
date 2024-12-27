import React from "react";
import { LuBox as OrderIcon, LuHeadphones as SupportIcon } from "react-icons/lu";
import { HiOutlineCreditCard as CardIcon } from "react-icons/hi";
import { RiMoneyDollarCircleLine as MoneyIcon } from "react-icons/ri";

const Qualities = () => {
  const qualities = [
    {
      logo: OrderIcon,
      title: "Free Shipping",
      description: "Free shipping for order above $150",
    },
    {
      logo: MoneyIcon,
      title: "Money Guarantee",
      description: "Within 30 days for an exchange",
    },
    {
      logo: SupportIcon,
      title: "Online Support",
      description: "24 hours a day, 7 days a week",
    },
    {
      logo: CardIcon,
      title: "Flexible Payment",
      description: "Pay with multiple credit cards",
    },
  ];
  return (
    <div className="flex gap-4 justify-between px-4">
      {qualities.map((d, idx) => (
        <div key={idx} className="grid gap-0.5 w-full max-w-[300px]">
            <d.logo className="size-8 mb-2" />
            <b>{d.title}</b>
            <p>{d.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Qualities;
