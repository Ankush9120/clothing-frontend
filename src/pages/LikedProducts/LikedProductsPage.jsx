import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ProductCard from "../../components/ProductCard";

const LikedProductsPage = () => {
  const likedProducts = useSelector((state) => state.likedProducts);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Liked Products</h1>
      {likedProducts.length === 0 ? (
        <p>You haven&apos;t liked any products yet.</p>
      ) : (
        <div className="grid grid-cols-2 gap-4">
          {likedProducts.map((product) => (
            <ProductCard key={product.id} data={product} />
          ))}
        </div>
      )}
      <Link to="/" className="mt-4 inline-block text-blue-500">
        Continue Shopping
      </Link>
    </div>
  );
};

export default LikedProductsPage;
