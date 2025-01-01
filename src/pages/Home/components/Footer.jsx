import React from "react";
import { FaFacebookF as Facebook, FaTwitter as Twitter, FaYoutube as Youtube } from "react-icons/fa";
import { AiFillInstagram as Instagram } from "react-icons/ai";
import { TfiLinkedin as Linkedin } from "react-icons/tfi";
import Brand from "/assets/images/brand.png";

const Footer = () => {
  return (
    <div className="text-[#6F6C90] flex flex-col justify-center items-center text-center gap-[40px]">
      <div className="flex items-center gap-3 mb-1.5">
        <img src={Brand} className="size-[32px]" alt="brand logo" />
        <span className="text-[32px] text-primary-100">Luxeora</span>
      </div>
      <div className="grid gap-[14px]">
        <p className="text-[18px] text-[#170F49] ">Contact Us</p>
        <p>525-252-4244</p>
        <p>luxeora@gmail.com</p>
        <p>www.luxeora.com</p>
      </div>
      <div className="grid gap-[14px] text-[12px]">
        <p className="text-[18px] text-[#170F49] ">Quick Links</p>
        <p>Home</p>
        <p>Brands</p>
        <p>About</p>
      </div>
      <div className="text-primary-100 flex items-center gap-[22px] *:size-[19px]">
        <Facebook />
        <Twitter />
        <Instagram />
        <Linkedin />
        <Youtube />
      </div>
      <p className="text-[#6F6C90] text-[12px] leading-[20px]">2024 Luxeora. All Rights Reserved</p>
    </div>
  );
};

export default Footer;
