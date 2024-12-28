import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ProductCard from "../../components/ProductCard";
import Header from "../../components/Header";

const LikedProductsPage = () => {
  const likedProducts = useSelector((state) => state.likedProducts);

  return (
    <>
      <Header title="Liked Products" />
      <div className="p-4">
        {likedProducts.length === 0 ? (
          <>
            <p>You haven&apos;t liked any products yet.</p>
            <Link to="/" className="mt-4 inline-block text-blue-500">
              Continue Shopping
            </Link>
          </>
        ) : (
          <div className="grid grid-cols-2 gap-4">
            {likedProducts.map((product) => (
              <ProductCard key={product.id} data={product} />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default LikedProductsPage;
