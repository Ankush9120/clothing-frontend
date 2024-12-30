import React, { useState, useEffect, useLayoutEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import ProductHeader from "./components/ProductHeader";
import ProductImages from "./components/ProductImages";
import ProductInfo from "./components/ProductInfo";
import ColorSelection from "./components/ColorSelection";
import SizeSelection from "./components/SizeSelection";
import DeliveryInfo from "./components/DeliveryInfo";
import CouponsSection from "./components/CouponsSection";
import DetailsAndCare from "./components/DetailsAndCare";
import EasyReturns from "./components/EasyReturns";
import RatingsAndReviews from "./components/RatingsAndReviews";
import CustomerReviews from "./components/CustomerReviews";
import SimilarProducts from "./components/SimilarProducts";
import { BagColoredIcon } from "../../libs/icons";
import { addToCart } from "../../store/slices/cartSlice";
import SizeSelectionModal from "./components/SizeSelectionModal";
import StickyButton from "../../components/StickyButton";

const ProductPage = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const similar_products = useSelector((state) => state.products.products);
  const cartItems = useSelector((state) => state.cart.items);
  const product = [...products, ...similar_products].find((p) => p.id == productId);
  const productAlreadyInCart = cartItems.find((item) => item.id == productId);

  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [addedToBagConfirmation, setAddedToBagConfirmation] = useState(false);
  const [addedToBag, setAddedToBag] = useState(false);
  
  useEffect(() => {
    if (product && product.colors && product.colors.length > 0) {
      setSelectedColor(product.colors[0]);
    }
  }, [product]);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleAddToBag = () => {
    if (!productAlreadyInCart && selectedSize) {
      dispatch(
        addToCart({
          ...product,
          size: selectedSize,
          color: selectedColor,
        })
      );
      setAddedToBag(true);
      setAddedToBagConfirmation(false);
    }
  };

  const handleAddToBagConfirmation = () => {
    if (productAlreadyInCart) return;
    setAddedToBagConfirmation(true);
  };

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <ProductHeader productId={productId} cartItemsCount={cartItems.length} />
      <ProductImages images={Array.from({length: 6}).map(() => product.image) || []} />
      <ProductInfo
        title={product.title}
        description={product.description}
        price={product.price}
        discount={product.discount}
      />
      <hr />
      <ColorSelection
        selectedColor={selectedColor}
        setSelectedColor={setSelectedColor}
        colors={product.colors || []}
        image={product.image}
      />
      <hr />
      <SizeSelection
        sizes={product.sizes || []}
        selectedSize={selectedSize}
        setSelectedSize={setSelectedSize}
      />
      <hr />
      <DeliveryInfo />
      <hr />
      <CouponsSection />
      <hr />
      <DetailsAndCare details={product.details || []} />
      <hr />
      <EasyReturns />
      <hr />
      <RatingsAndReviews rating={product.rating} reviewCount={product.reviewCount} />
      <hr />
      <CustomerReviews reviews={product.reviews || []} />
      <hr />
      <SimilarProducts products={similar_products || []} />

      <Link to={productAlreadyInCart ? "/cart" : undefined}>
        <StickyButton onClick={handleAddToBagConfirmation} icon={BagColoredIcon}>
          {productAlreadyInCart ? "Go to Bag" : `Add to Bag ₹${product.price}`}
        </StickyButton>
      </Link>

      <SizeSelectionModal
        open={addedToBagConfirmation}
        onClose={() => setAddedToBagConfirmation(false)}
        sizes={product.sizes || []}
        product={product}
        onConfirm={handleAddToBag}
        selectedSize={selectedSize}
        setSelectedSize={setSelectedSize}
        isProductInCart={!!productAlreadyInCart}
      />
    </div>
  );
};

export default ProductPage;

