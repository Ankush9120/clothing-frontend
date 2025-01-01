import { createSlice } from "@reduxjs/toolkit";
import { productData, similar_products, trendingProducts } from "../../libs/data";

const initialState = {
  products: productData,
  similarProducts: similar_products,
  items: productData,
  trendingItems: trendingProducts,
  flashSaleItems: [
    { id: 9, name: "Silk Blouse", price: 39.99, discountPercentage: 30, image: "/assets/images/flash1.jpg" },
    { id: 10, name: "Cargo Pants", price: 54.99, discountPercentage: 25, image: "/assets/images/flash2.jpg" },
    { id: 11, name: "Sunglasses", price: 19.99, discountPercentage: 40, image: "/assets/images/flash3.jpg" },
    { id: 12, name: "Crossbody Bag", price: 44.99, discountPercentage: 35, image: "/assets/images/flash4.jpg" },
  ],
  bannerData: {
    title: "WINTER SALE",
    subtitle: "WEEKEND ONLY",
    discount: "UP TO 50%",
    description: "Torem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  customerFeedback: {
    name: "Jane Bennet",
    role: "Fashion Model",
    image: "/assets/images/feedback-avatar.png",
    comment: "Ladiesvibe provided me the exact quality product I wanted. I'm very much satisfied by their quick delivery process. They delivered my dress within a day.",
  },
  collections: {
    summer: {
      title: "Summer",
      subtitle: "Collections",
      description: "We consider your look and comfort on scorching weather.",
      image: "/assets/images/collection1.png",
      content: [
        "Our main aim is to serve our customer with better quality product. We try to understand their needs and provide them within a short period of time.",
        "We provide the largest clothing collection for any season. You can choose trendy or classy design according to your preferences. Our services are super fast and we update within 24 hours.",
      ],
    },
    winter: {
      title: "Winter",
      subtitle: "Collections",
      description: "We consider your look and comfort on cold weather.",
      images: ["/assets/images/collection-2-1.png", "/assets/images/collection-2-2.png"],
      content: ["We provide the largest clothing collection for any season. You can choose trendy or classy design according to your preferences. Our services are super fast and we update within 24 hours."],
    },
  },
  categories: [
    { name: "Shirt", icon: "/assets/images/shirt.png", active: false },
    { name: "Pant", icon: "/assets/images/pant.png", active: false },
    { name: "Dress", icon: "/assets/images/dress.png", active: false },
    { name: "Coat", icon: "/assets/images/coat.png", active: false }
  ],
  flashSale: {
    filters: ["All", "Newest", "Popular", "Men", "Women", "Kids", "Sale", "Trending", "Accessories", "Shoes", "Electronics", "Sportswear"],
    activeFilter: "Newest",
  },
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    toggleCategoryActive: (state, action) => {
      const index = action.payload;
      state.categories = state.categories.map((category, idx) => ({
        ...category,
        active: idx === index ? !category.active : false,
      }));
    },
    setActiveFilter: (state, action) => {
      state.flashSale.activeFilter = action.payload;
    },
  },
});

export const { toggleCategoryActive, setActiveFilter } = productSlice.actions;

export default productSlice.reducer;
