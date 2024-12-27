import React from "react";
import { useNavigate } from "react-router-dom";
import Icon from "./Icon";

const ArrowLeftIcon = "/assets/icons/leftArrow.svg";
const BackButton = () => {
  const navigate = useNavigate();
  return (
    <div onClick={() => navigate(-1)}>
      <Icon icon={ArrowLeftIcon} />
    </div>
  );
};

export default BackButton;
