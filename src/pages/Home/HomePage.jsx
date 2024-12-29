import React from "react";
import Banner from "/assets/images/banner.png";
import Arrow from "/assets/images/arrow.png";
import ArrowColored from "/assets/images/arrow-colored.png";
import Collection1 from "/assets/images/collection1.png";
import Collection21 from "/assets/images/collection-2-1.png";
import Collection22 from "/assets/images/collection-2-2.png";
import FeedbackAvatar from "/assets/images/feedback-avatar.png";
import Commas from "/assets/images/commas.png";
import Brand from "/assets/images/brand.png";
import ProductCard from "../../components/ProductCard";
import { MdKeyboardArrowLeft as ArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight as ArrowRight } from "react-icons/md";
import { FaFacebookF as Facebook } from "react-icons/fa";
import { FaTwitter as Twitter } from "react-icons/fa";
import { AiFillInstagram as Instagram } from "react-icons/ai";
import { TfiLinkedin as Linkdin } from "react-icons/tfi";
import { FaYoutube as Youtube } from "react-icons/fa";
import SearchBar from "../../components/SearchBar";
import Categories from "./components/Categories";
import FlashSale from "./components/FlashSale";
import Navbar from "../../components/Navbar";
import { data1, data2 } from "../../libs/data";

const HomePage = () => {
  const OutlineButton = ({ children }) => {
    return (
      <button className="w-[118px] h-[32px] flex justify-center items-center text-primary-100 border-[1px] border-solid border-primary-100 gap-[15px] rounded-[7.3px] mx-auto text-[14px]">
        {children} <img src={ArrowColored} className="h-[7px]" />
      </button>
    );
  };
  return (
    <div className="text-secondary-100 pb-10">
      <Navbar />

      <SearchBar />

      <div className="px-3 mt-[17px]">
        <div className="relative overflow-hidden">
          <div className="absolute h-full max-w-[216px] flex flex-col justify-center items-center text-center ml-[13px]">
            <p className="text-secondary-100 text-[14px] max-[400px]:text-[12px]">WEEKEND ONLY</p>
            <p className="font-[900] text-primary-100 text-[26px] leading-[39px] max-[400px]:text-[22px]">WINTER SALE</p>
            <p className="text-secondary-100 font-semibold leading-[24px] mt-1 max-[400px]:text-[14px] max-[400px]:leading-[18px]">UP TO 50%</p>
            <p className="text-secondary-100 text-[18px] leading-[18px] mt-2.5 max-[400px]:text-[14px] max-[400px]:leading-[18px]">Torem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <button className="w-[118px] h-[32px] flex justify-center items-center bg-primary-100 text-white gap-[15px] rounded-[7.3px] mt-3 text-[14px] max-[400px]:scale-75">
              Explore <img src={Arrow} className="h-[7px]" />
            </button>
          </div>
          <img src={Banner} alt="" />
        </div>
        <div className="flex gap-[5px] justify-center *:min-h-2 *:min-w-2 *:rounded-full *:bg-[#C1AEA04D] mt-3">
          <div></div>
          <div className="!bg-primary-100"></div>
          <div></div>
          <div></div>
        </div>
      </div>

      <Categories />

      <FlashSale />

      <div>
        <div className="grid grid-cols-2 px-[18px] gap-x-3 gap-y-[18px] py-[32px]">
          {data1.map((d) => (
            <ProductCard key={d.id} data={d} />
          ))}
        </div>
        <OutlineButton>View All</OutlineButton>
      </div>

      <div className="mt-[32px]">
        <div className="pl-4">Trending Collections</div>
        <div className="grid grid-cols-2 px-[18px] gap-x-3 gap-y-[18px] pt-[18px] pb-[32px]">
          {data2.map((d) => (
            <ProductCard key={d.id} data={d} />
          ))}
        </div>
        <OutlineButton>View All</OutlineButton>
      </div>

      <div className="text-[14px] py-[32px] px-[18px]">
        <p className=" relative before:[''] before:h-[1px] before:w-[70%] before:absolute before:bg-secondary-100 before:bottom-0">
          <span className="text-[32px] leading-[44px]">Summer</span>
          <span className="text-[18px] leading-[18px] ml-2">Collections</span>
        </p>
        <p className="text-[12px] mt-2.5">We consider your look and comfort on scorching weather.</p>
        <img src={Collection1} alt="" className="my-6" />
        <p>Our main aim is to serve our customer with better quality product. We try to understand their needs and provide them within a short period of time.</p>
        <p className="mt-[15px]">We provide the largest clothing collection for any season. You can choose trendy or classy design according to your preferences. Our services are super fast and we update within 24 hours.</p>
        <div className="mt-6">
          <OutlineButton>Explore</OutlineButton>
        </div>
      </div>

      <div className="text-[14px] py-[32px] px-[18px]">
        <div className="flex justify-end relative before:[''] before:h-[1px] before:w-[70%] before:absolute before:bg-secondary-100 before:bottom-0">
          <p>
            <span className="text-[32px] leading-[44px]">Winter</span>
            <span className="text-[18px] leading-[18px] ml-2">Collections</span>
          </p>
        </div>
        <p className="text-[12px] mt-2.5">We consider your look and comfort on cold weather.</p>
        <div className="flex justify-end relative my-6">
          <img src={Collection21} alt="" className="h-[249px]" />
          <img src={Collection22} alt="" className="absolute w-[263px] bottom-0 right-[90px]" />
        </div>
        <p>We provide the largest clothing collection for any season. You can choose trendy or classy design according to your preferences. Our services are super fast and we update within 24 hours.</p>

        <div className="mt-6">
          <OutlineButton>Explore</OutlineButton>
        </div>
      </div>

      <div className="text-[14px] py-[32px] px-[18px]">
        <div className="flex justify-center relative before:[''] before:h-[1px] before:w-[90%] before:absolute before:bg-secondary-100 before:bottom-0 pb-2">
          <p>
            <span className="text-[18px] leading-[18px]">What our</span>
            <span className="text-[32px] leading-[44px] ml-2">Customer says</span>
          </p>
        </div>
        <p className="text-[12px] mt-2.5 text-center">We value our customer’s feedback to provide the best service.</p>
        <div className="flex gap-[13px] relative my-6">
          <img src={FeedbackAvatar} alt="" className="h-[160px]" />
          <div className="grid gap-1.5">
            <img src={Commas} className="h-5" />
            <p className="leading-[19px]">Ladiesvibe provided me the exact quality product I wanted. I’m very much satisfied by their quick delivery process. They delivered my dress within a day.</p>
            <div>
              <p className="text-[12px]">Jane Bennet</p>
              <p className="text-[10px]">Fashion Model</p>
            </div>
          </div>
        </div>
        <div className="mt-6 *:h-6 *:w-[26px] *:text-primary-100 *:border-[1px] *:border-solid *:border-primary-100 *:grid *:place-items-center *:rounded-[7px] flex justify-end gap-3">
          <button>
            <ArrowLeft />
          </button>
          <button>
            <ArrowRight />
          </button>
        </div>
      </div>

      <div className="text-[#6F6C90] flex flex-col justify-center items-center text-center gap-[40px]">
        <div className="flex items-center gap-3 mb-1.5">
          <img src={Brand} className="size-[32px]" alt="" />
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
          <Linkdin />
          <Youtube />
        </div>
        <p className="text-[#6F6C90] text-[12px] leading-[20px]">2024 Luxeora. All Rights Reserved</p>
      </div>
    </div>
  );
};

export default HomePage;
