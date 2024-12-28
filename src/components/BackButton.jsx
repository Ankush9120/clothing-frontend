import React from "react";
import { useNavigate } from "react-router-dom";
import Icon from "./Icon";

const ArrowLeftIcon = "/assets/icons/leftArrow.svg";
const BackButton = ({to}) => {
  const navigate = useNavigate();
  return (
    <div onClick={() => navigate(to || -1)} className="cursor-pointer">
      <Icon icon={ArrowLeftIcon} />
    </div>
  );
};

export default BackButton;
