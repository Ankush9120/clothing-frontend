import React from "react";
import { LuPhoneCall as PhoneIcon, LuMail as MailIcon } from "react-icons/lu";
import { HiOutlineLocationMarker as LocationIcon, HiOutlineArrowRight as RightArrow } from "react-icons/hi";
import { FaFacebookF as FacebookIcon } from "react-icons/fa6";
import { FaInstagram as InstaIcon } from "react-icons/fa";
import { FaTwitter as TwitterIcon } from "react-icons/fa";
import Icon from "./Icon";
import { icons } from "../libs/icon";
import { FcShop as ShopIcon } from "react-icons/fc";

const Footer = () => {
  return (
    <div className="bg-black text-white">
      <div className="max-w-[1500px] mx-auto px-4">
        <div className="flex justify-between py-10 *:max-w-[300px]">
          <ul className="grid gap-4 h-min">
            <li className="flex items-center gap-2">
              <ShopIcon className="size-8" />
              <span className="font-bold text-md">Shop.Me</span>
            </li>
            <li className="flex items-center gap-2">
              <PhoneIcon /> (704) 555-0127
            </li>
            <li className="flex items-center gap-2">
              <MailIcon /> (704) 555-0127
            </li>
            <li className="flex items-center gap-2">
              <LocationIcon /> Near Rajdhani Colony, Hydrabad 415485
            </li>
          </ul>
          <ul className="grid gap-4">
            <li className="font-bold">Information</li>
            <li>My Account</li>
            <li>Login</li>
            <li>My Cart</li>
            <li>My Whislist</li>
            <li>Checkout</li>
          </ul>
          <ul className="grid gap-4">
            <li className="font-bold">Service</li>
            <li>About Us</li>
            <li>Careers</li>
            <li>Delivery Information</li>
            <li>Privacy Policy</li>
            <li>Terms & Condition</li>
          </ul>
          <ul className="grid gap-4 h-min">
            <li className="font-bold">Subscribe</li>
            <li>Enter your email below to be the first to know about new collections and product launches.</li>
            <li>
              <label className="input input-bordered flex items-center gap-2 bg-transparent !border-opacity-60 !border-white p-2 px-3">
                <MailIcon className="size-6" />
                <input type="text" className="grow" placeholder="Email" />
                <RightArrow className="size-4" />
              </label>
            </li>
          </ul>
        </div>
        <hr className="bg-white opacity-50" />
        <div className="flex justify-between items-center pr-1 py-2">
          <div className="flex gap-3">
            <Icon icon={icons.VISA} className="size-10" />
            <Icon icon={icons.MASTER_CARD} className="size-10" />
            <Icon icon={icons.GPAY} className="size-10" />
            <Icon icon={icons.PAYPAL} className="size-10" />
          </div>
          <p>&copy;2024 Shop.Me All Rights are reserved</p>
          <div className="flex gap-4 *:size-5">
            <FacebookIcon /> <InstaIcon /> <TwitterIcon />{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
