import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import ProductHeader from "./components/ProductHeader";
import Carousel from "../../components/Carousel";
import LikeIcon from "../../components/LikeIcon";
import Icon from "../../components/Icon";
import { BagColoredIcon, BagIcon, BrandLogo, DiscountIcon, StarIcon, ThumbsDownIcon, ThumbsUpIcon } from "../../libs/icons";
import ProductCard from "../../components/ProductCard";
import { addToCart } from "../../store/slices/cartSlice";
import { similar_products } from "../../libs/data";
import { ReactSVG } from "react-svg";
import CustomerPhotos from "./components/CustomerPhotos";
import SizeSelectionModal from "./components/SizeSelectionModal";

const ProductPage = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const product = products.find((p) => p.id == productId);

  const { image, title, description, price, discount } = product || {};
  const [selectedColor, setSelectedColor] = useState("Yellow");
  const [selectedSize, setSelectedSize] = useState("");
  const [pincode, setPincode] = useState("");
  const [deliveryInfo, setDeliveryInfo] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showSizeModal, setShowSizeModal] = useState(false);
  const [addedToBag, setAddedToBag] = useState(false);

  const sizes = [
    { label: "XS", count: 5 },
    { label: "S", count: 4 },
    { label: "M", count: 6 },
    { label: "L", count: 3 },
    { label: "XL", count: 1 },
  ];

  const handleCheckPincode = () => {
    setLoading(true);
    // Simulate API call with random response
    new Promise((resolve) => setTimeout(resolve, 500)).then(() => {
      const random = Math.floor(Math.random() * 10) + 1;
      const isDeliverable = random > 3;

      if (isDeliverable) {
        const date = new Date();
        date.setDate(date.getDate() + 7);
        const delivery_date = date.toLocaleDateString("en-US", {
          weekday: "short",
          day: "numeric",
          month: "short",
        });

        setDeliveryInfo({
          status: "success",
          delivery_date,
          cod_available: true,
          free_delivery: true,
        });
      } else {
        setDeliveryInfo({
          status: "error",
          message: "Delivery unavailable for this pincode. Please try another.",
        });
      }
      setLoading(false);
    });
  };

  const handleAddToBag = () => {
    if (!selectedSize) {
      setShowSizeModal(true);
      return;
    }
    dispatch(
      addToCart({
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.image,
        size: selectedSize,
      })
    );
    setAddedToBag(true);
  };

  return (
    <div>
      <ProductHeader productId={productId} />

      <Carousel images={[image, image, image, image]} />

      <div className="p-[18px]">
        <div className="flex justify-between items-center gap-2.5">
          <div className="grid gap-1.5">
            <div className="uppercase leading-[22px]">{title}</div>
            <div className="text-[12px] leading-[14px]">{description}</div>
          </div>
          <LikeIcon product={product} className="bg-white *:stroke-black" />
        </div>

        <div className="mt-[13px]">
          <div className="flex items-center">
            <div className="text-[18px]">₹{price}</div>
            <div className="text-secondary-100 opacity-50 ml-[14px] text-[14px] line-through">₹8000</div>
            <div className="text-green-100 ml-[9px]">{discount}% OFF</div>
          </div>
          <div className="text-secondary-100 opacity-50 text-[10px] leading-[12px]">Inclusive of all taxes</div>
        </div>

        <div className="py-[11px] px-[9px] rounded-[4px] bg-gradient-to-r from-green-200 to-green-300 flex justify-between mt-3 text-[12px] items-center">
          <div className="flex items-center gap-[14px] text-green-100">
            <Icon icon={DiscountIcon} className="p-0" />
            <span>Get it for</span>
          </div>
          <span className="text-primary-100 font-semibold">How ?</span>
        </div>
      </div>
      <hr />

      <div className="p-[18px] pr-0">
        <div className="grid gap-4">
          <div className="flex gap-1.5">
            Color <div className="text-secondary-100 opacity-50">· {selectedColor}</div>
          </div>
          <div className="flex gap-2 overflow-x-auto pr-[18px]">
            {["Yellow", "Red", "Blue", "Green", "Orange", "Purple"].map((color, idx) => (
              <div key={idx} className={`min-w-[80px] w-[80px] h-[100px] border-[1px] ${selectedColor === color ? "border-primary-100" : "border-transparent"}`} onClick={() => setSelectedColor(color)}>
                <img src={image} alt={color} className="w-full h-full" />
              </div>
            ))}
          </div>
        </div>
      </div>
      <hr />
      <div className="p-[18px] grid gap-[18px]">
        <div className="flex justify-between">
          <span className="text-secondary-100">Select Size</span>
          <span className="text-primary-100 cursor-pointer">Size Guide</span>
        </div>

        <div className="flex gap-2">
          {sizes.map((size) => (
            <div key={size.label} className="flex flex-col items-center">
              <div className={`size-10 border rounded grid place-items-center ${selectedSize === size.label ? "bg-primary-100 !border-primary-100 text-white" : "border-[1px] border-secondary-100"} ${size.count <= 2 ? "border-red-100" : ""}`} onClick={() => setSelectedSize(size.label)}>
                {size.label}
              </div>
              {size.count <= 2 && <span className="text-red-500 text-xs mt-1">{size.count} left</span>}
            </div>
          ))}
        </div>
      </div>

      <hr />
      {/* Check delivery date section */}
      <div className="p-[18px]">
        <h3 className="mb-1">Check delivery date</h3>
        <p className="text-secondary-100 opacity-60 text-[12px] mb-1">Enter pincode to know exact delivery dates/charges</p>

        <div className="flex items-center gap-2 mb-4 bg-primary-300 rounded-[4px] p-2">
          <input type="text" placeholder="Pincode" value={pincode} onChange={(e) => setPincode(e.target.value)} className="flex-grow rounded text-[14px] focus:outline-none bg-transparent placeholder-secondary-100 placeholder:font-normal" />
          <button onClick={handleCheckPincode} disabled={loading || !pincode} className="text-secondary-100 text-[14px] font-medium">
            {loading ? "Checking..." : "Check"}
          </button>
        </div>

        {deliveryInfo && (
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className={`rounded p-4 ${deliveryInfo.status === "success" ? "bg-green-50" : "bg-red-50"}`}>
            {deliveryInfo.status === "success" ? (
              <div className="space-y-3 text-[14px]">
                <div className="flex items-center gap-2 font-albert">
                  <span>Delivery by {deliveryInfo.delivery_date}</span>
                </div>
                <div className="flex items-center gap-2 font-albert">
                  <span>Pay on Delivery available</span>
                </div>
                <div className="flex items-center gap-2 font-albert">
                  <span>7-day return and exchange</span>
                </div>
              </div>
            ) : (
              <div className="text-red-600 text-[14px]">{deliveryInfo.message}</div>
            )}
          </motion.div>
        )}

        <ul className="mt-4 space-y-2 text-[14px]">
          <li className="flex items-center">
            <span className="text-secondary-100 font-albert">• Free delivery on Rs 999+ orders</span>
          </li>
          <li className="flex items-center">
            <span className="text-secondary-100 font-albert">• COD on Rs 500+ orders</span>
          </li>
          <li className="flex items-center">
            <span className="text-secondary-100 font-albert">• 7-day return and size exchange</span>
          </li>
        </ul>
      </div>
      <hr />

      {/* Coupons Section */}
      <div className="py-3 pl-[18px] bg-primary-600">
        <span className="mb-1">Coupons</span>
        <p className="text-secondary-100 text-[12px] mb-3 font-albert">Apply any of these coupons on bag during checkout</p>
        <div className="flex gap-3 overflow-x-auto pr-[18px]">
          {[
            { code: "LRFLAT10", description: "Extra 10% off", details: "Get extra 10% off on your first purchase. Maximum Discount." },
            { code: "LRNEW15", description: "Extra 15% off", details: "Get extra 15% off on selected products." },
          ].map((coupon, idx) => (
            <div key={idx} className="border border-primary-300 rounded-lg bg-primary-500 min-w-[285px] max-w-[285px]">
              <div className="p-3 flex gap-2.5">
                <div className="flex items-center">
                  <img src={BrandLogo} alt="" className="min-w-[44px] max-w-[44px] aspect-square" />
                </div>
                <div>
                  <h4 className="text-[14px]">{coupon.description}</h4>
                  <p className="text-secondary-100 text-[12px] font-albert line-clamp-2 opacity-60">{coupon.details}</p>
                </div>
              </div>
              <div className="text-[14px] flex justify-between px-2.5 py-[5px] border-t border-primary-300">
                <div className="text-secondary-100">{coupon.code}</div>
                <button className="text-primary-100 font-medium font-albert">Copy Code</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <hr />

      {/* Details & Care Section */}
      <div className="p-[18px]">
        <h3 className="text-[18px] mb-3">Details & Care</h3>
        <ul className="text-secondary-100 text-[14px] space-y-1 *:font-albert">
          <li>• Regular Fit</li>
          <li>• Package contains: 1 Jacket</li>
          <li>• Dry clean</li>
          <li>• 100% Wool</li>
        </ul>
      </div>
      <hr />

      {/* Easy Returns Section */}
      <div className="p-[18px]">
        <h3 className="mb-2">Easy 7 days returns and exchanges</h3>
        <p className="text-secondary-100 text-[14px] font-albert">Choose to return or exchange for a different size (if available) within 7 days.</p>
      </div>

      {/* Ratings & Reviews Section */}
      <div className="p-[18px]">
        <h3 className="mb-2">Ratings & Reviews</h3>
        <div className="flex items-center gap-3 border-[1px] border-primary-200 rounded-[4px] py-3 px-5 text-secondary-100 bg-primary-300">
          <div className="text-[26px] flex items-center gap-2 grow">
            4.1 <StarIcon />
          </div>
          <div className="text-[14px] flex grow h-10 *:grow *:border-l-[1px] *:border-primary-200 *:px-5">
            <div>
              <div>852</div> <div>Ratings</div>
            </div>
            <div>
              <div>52</div> <div>Reviews</div>
            </div>
          </div>
        </div>
      </div>
      <hr />

      {/* Customer Photos & Reviews Section */}
      <div className="p-[18px]">
        <CustomerPhotos images={Array.from({length: 20}).map(d => image)} />

        <h3 className="mb-3">Customer Reviews (52)</h3>
        <div className="flex gap-1.5 flex-wrap mb-4 *:py-2.5 *:px-3 *:border-[1px] *:border-primary-400 *:flex *:items-center *:gap-1.5 *:font-albert *:font-medium">
          <span className="px-2 py-1 rounded-full text-[12px]">
            <ThumbsUpIcon className="text-green-100" /> Nice product quality
          </span>
          <span className="px-2 py-1 rounded-full text-[12px]">
            <ThumbsUpIcon className="text-green-100" /> Great fit
          </span>
          <span className="px-2 py-1 rounded-full text-[12px]">
            <ThumbsUpIcon className="text-green-100" /> Lightweight
          </span>
          <span className="px-2 py-1 rounded-full text-[12px]">
            <ThumbsDownIcon className="text-red-100" /> Not worth the money
          </span>
        </div>

        <div className="border rounded-md font-albert">
          <div className="flex items-center gap-2 mb-2">
            <div className="bg-green-100 text-white px-2 py-1 rounded-md text-[12px]">4 ★</div>
            <span className="text-secondary-100 text-[12px]">2 years ago</span>
          </div>
          <p className="text-secondary-100 text-[14px] mb-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per....
            <span className="text-secondary-100 cursor-pointer">read more</span>
          </p>
          <div className="text-secondary-100 text-[14px] bg-primary-300 rounded-[5px] px-[7px] py-[3px] w-max">
            <span className="font-semibold">Size bought:</span> S
          </div>
        </div>
        <button className="text-primary-100 font-semibold mt-3 text-[14px] font-albert">View all 31 reviews</button>
      </div>

      {/* Similar Products Section */}
      <div className="p-[18px]">
        <h3 className="text-[16px] mb-[15px]">Similar Products</h3>
        <div className="grid gap-4 grid-cols-2">
          {similar_products.map((product) => (
            <ProductCard key={product.id} data={product} />
          ))}
        </div>
      </div>

      {/* Sticky Add to Bag Button */}
      <motion.div initial={{ y: 100 }} animate={{ y: 0 }} className="sticky bottom-0 left-0 right-0 p-[18px] bg-primary-500">
        <button className="w-full py-[10px] rounded-[8px] bg-primary-100 text-primary-500 flex justify-center items-center gap-3" onClick={handleAddToBag}>
          <Icon icon={BagColoredIcon} className="text-[18px]" />
          {addedToBag ? "Added to Bag" : `Add to Bag ₹${price}`}
        </button>
      </motion.div>

      <SizeSelectionModal open={showSizeModal} onClose={() => setShowSizeModal(false)} sizes={sizes} product={product} onConfirm={addToCart} setSelectedSize={setSelectedSize} />
    </div>
  );
};

export default ProductPage;
