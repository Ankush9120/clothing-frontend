import React from 'react';
import ProductCard from '../../../components/ProductCard';
import OutlineButton from '../../../components/OutlineButton';

const ProductSection = ({ title, products }) => {
  return (
    <div className='grid gap-[18px]'>
      {title && <div>{title}</div>}
      <div className="grid grid-cols-2 gap-x-3 gap-y-[18px]">
        {products.map((product) => (
          <ProductCard key={product.id} data={product} />
        ))}
      </div>
      <OutlineButton>View All</OutlineButton>
    </div>
  );
};

export default ProductSection;

