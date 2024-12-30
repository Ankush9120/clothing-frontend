import React from 'react';
import ProductCard from "../../../components/ProductCard";

const SimilarProducts = ({ products }) => {
  return (
    <div className="p-[18px]">
      <h3 className="text-[16px] mb-[15px]">Similar Products</h3>
      <div className="grid gap-4 grid-cols-2">
        {products.map((product) => (
          <ProductCard key={product.id} data={product} />
        ))}
      </div>
    </div>
  );
};

export default SimilarProducts;

