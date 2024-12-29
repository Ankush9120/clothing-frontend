import React from "react";
import { RadioIcon } from "../libs/icons";
import { STATUS_STEPS } from "../libs/constants";

const StatusBar = ({ activeStep = STATUS_STEPS.BAG }) => {
  const steps = [STATUS_STEPS.BAG, STATUS_STEPS.ADDRESS, STATUS_STEPS.PAYMENT];

  return (
    <div className="p-4 font-albert">
      <div className="flex items-center text-sm">
        {steps.map((step, index) => {
          const isActive = steps.indexOf(activeStep) >= index;
          return (
            <React.Fragment key={step}>
              {/* Line */}
              <div
                className={`h-[1px] grow w-max relative ${
                  isActive ? "bg-primary-100" : "bg-secondary-100 opacity-50"
                }`}
              >
                {isActive && (
                  <RadioIcon
                    className="absolute -right-1.5 -top-1.5 text-primary-100"
                  />
                )}
                {!isActive && (
                  <div className="absolute -right-1.5 -top-1 bg-secondary-100 rounded-full size-2" />
                )}
              </div>
              {/* Label */}
              <span
                className={`mx-3 text-[10px] ${
                  isActive
                    ? "text-primary-100"
                    : "text-secondary-100 opacity-50"
                }`}
              >
                {step}
              </span>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default StatusBar;
