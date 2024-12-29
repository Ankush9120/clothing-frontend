import { MdCheck } from "react-icons/md";

const Timeline = ({ steps }) => (
  <div className="relative flex justify-between items-center w-full mt-4 mb-6">
    <div className="absolute left-0 right-0 h-0.5 bg-primary-300">
      <div
        className="h-full bg-green-100 transition-all duration-500"
        style={{
          width: `${(steps.filter((step) => step.completed).length - 1) * 33.33}%`,
        }}
      />
    </div>
    {steps.map((step) => (
      <div key={step.id} className="relative flex flex-col items-center">
        <div
          className={`w-5 h-5 rounded-full flex items-center justify-center z-10 
              ${step.completed ? "bg-green-100" : "bg-white border-2 border-primary-300"}`}
        >
          {step.completed && <MdCheck className="w-3 h-3 text-white" />}
        </div>
        <span className="text-sm text-secondary-300 mt-2 font-albert">{step.label}</span>
      </div>
    ))}
  </div>
);

export default Timeline;
