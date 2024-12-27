import React, { useState, useEffect, useRef } from "react";

const Carousel = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null);

  const handleScroll = () => {
    const scrollLeft = carouselRef.current.scrollLeft;
    const itemWidth = carouselRef.current.clientWidth;
    const newIndex = Math.round(scrollLeft / itemWidth);
    setActiveIndex(newIndex);
  };

  useEffect(() => {
    const carouselElement = carouselRef.current;
    carouselElement.addEventListener("scroll", handleScroll);
    return () => {
      carouselElement.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div className="carousel w-full" ref={carouselRef}>
        {images.map((d, idx) => (
          <div key={idx} id={"item" + idx} className="carousel-item w-full">
            <img src={d} className="w-full" />
          </div>
        ))}
      </div>
      <div className="flex w-full justify-center gap-2 py-2">
        {images.map((_, idx) => (
          <div key={idx} className={`size-2 rounded-full ${activeIndex === idx ? "bg-opacity-100 bg-primary-100" : "bg-primary-200 bg-opacity-30"}`}>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
