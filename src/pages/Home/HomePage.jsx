import React, { useState } from "react";
import { useSelector } from "react-redux";
import FlashSale from "./components/FlashSale";
import ProductSection from "./components/ProductSection";
import Collection from "./components/Collection";
import CustomerFeedback from "./components/CustomerFeedback";
import Banner from "./components/Banner";
import SearchBar from "../../components/SearchBar";
import Categories from "./components/Categories";
import Navbar from "../../components/Navbar";
import ProductCard from "../../components/ProductCard";

const HomePage = () => {
  const products = useSelector((state) => state.products.items);
  const trendingProducts = useSelector((state) => state.products.trendingItems);
  const collections = useSelector((state) => state.products.collections);
  const [searchQuery, setSearchQuery] = useState("");

  const allProducts = [...products, ...trendingProducts];
  
  const filteredProducts = allProducts.filter(product =>
    product?.name?.toLowerCase()?.includes(searchQuery?.toLowerCase())
  );

  return (
    <div className="text-secondary-100 pb-10">
      <Navbar />
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      {searchQuery ? (
        <div className="px-4 mt-4">
          {filteredProducts.length > 0 ? (
            <ProductSection title="Search Results" products={products} />
          ) : (
            <p className="text-gray-500 text-center py-4">No results found</p>
          )}
        </div>
      ) : (
        <>
          <div className="px-3 mt-[17px]">
            <Banner />
          </div>

          <Categories />
          <FlashSale />

          <div className="p-[18px] mt-[14px]">
            <ProductSection products={products} />
          </div>

          <div className="p-[18px]">
            <ProductSection title="Trending Collections" products={trendingProducts} />
          </div>

          <Collection data={collections?.summer} />
          <Collection data={collections?.winter} reverse={true} />

          <CustomerFeedback />
        </>
      )}
    </div>
  );
};

export default HomePage;

