import React from "react";
import BackButton from "./BackButton";
import { Link } from "react-router-dom";
import Icon from "./Icon";
import { IconType } from "../libs/types";

const Header = ({ title, links = [] }) => {
  return (
    <div className="flex justify-between py-2.5 px-4 items-center sticky top-0 bg-primary-500 z-10">
      <div className="flex gap-3 items-center">
        <BackButton />
        <span>{title}</span>
      </div>
      <div className="flex gap-2.5 items-center">
        {links.map((link, idx) => {
          const { icon: Ico } = link;
          return (
            <Link key={idx} to={link.to}>
              <Icon variant={IconType.FILLED}>
                <Ico />
              </Icon>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Header;
