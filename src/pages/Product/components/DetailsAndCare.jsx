import React from 'react';

const DetailsAndCare = ({ details }) => {
  return (
    <div className="p-[18px]">
      <h3 className="text-[18px] mb-3">Details & Care</h3>
      <ul className="text-secondary-100 text-sm space-y-1 *:font-albert">
        {details.map((detail, index) => (
          <li key={index}>• {detail}</li>
        ))}
      </ul>
    </div>
  );
};

export default DetailsAndCare;

