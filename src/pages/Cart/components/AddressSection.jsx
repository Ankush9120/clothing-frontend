import { Link } from "react-router-dom";

const AddressSection = ({ selectedAddress }) => {
  const headingText = "Deliver to:";
  const buttonText = selectedAddress ? "Change" : "+ Add";
  const infoText = selectedAddress ? `${selectedAddress.name}, ${selectedAddress.pincode}` : "Please add an address to proceed";
  const subInfoText = selectedAddress?.address || "";

  return (
    <div className="p-4">
      <div className="flex justify-between items-center">
        <div className="font-albert">
          <p className="text-secondary-100 text-[12px]">{headingText}</p>
          <p className={`font-medium ${!selectedAddress ? "text-secondary-300 text-[12px]" : ""}`}>{infoText}</p>
          {selectedAddress && <p className="text-secondary-300 text-[12px]">{subInfoText}</p>}
        </div>
        <Link to="/address">
          <button className={`text-primary-100 font-semibold font-albert text-[12px] p-2`}>{buttonText}</button>
        </Link>
      </div>
    </div>
  );
};

export default AddressSection;
