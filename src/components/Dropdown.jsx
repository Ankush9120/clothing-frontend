import React, { useState } from "react";
import { RiArrowDownSLine as ArrowDown } from "react-icons/ri";

const Dropdown = ({ items = [], defaultSelected, onChange }) => {
  const [selected, setSelected] = useState(defaultSelected || items?.[0]?.value);

  const label = items.find((d) => d?.value === selected)?.label || null;
  const handleChange = (value) => {
    setSelected(value);
    onChange?.(value);
  };
  
  return (
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="flex items-center gap-5">
        {label} <ArrowDown />
      </div>
      <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] p-2 shadow min-w-[150px]">
        {items.map((d, idx) => (
          <li key={idx} onClick={() => handleChange(d?.value)}>
            <a className={d?.value === selected ? "active" : undefined}>{d?.label}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
