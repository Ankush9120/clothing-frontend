import React, { useState, useRef, useEffect } from "react";
import { ImageModal } from "./ImageModal";

const CustomerPhotos = ({ images }) => {
  const [visibleImages, setVisibleImages] = useState([]);
  const [remainingCount, setRemainingCount] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const updateVisibleImages = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        let totalWidth = 0;
        let visibleCount = 0;

        for (let i = 0; i < images.length; i++) {
          totalWidth += 80; // 80px width + 8px gap
          if (totalWidth > containerWidth) {
            // 60px for count button + 8px gap
            break;
          }
          visibleCount++;
        }

        setVisibleImages(images.slice(0, visibleCount));
        setRemainingCount(images.length - visibleCount);
      }
    };

    updateVisibleImages();
    window.addEventListener("resize", updateVisibleImages);
    return () => window.removeEventListener("resize", updateVisibleImages);
  }, [images]);

  return (
    <>
      <h3 className="mb-3 text-lg font-semibold">Customer Photos & Videos</h3>
      <div className="relative">
        <div ref={containerRef} className="flex justify-between gap-2 mb-4 overflow-x-auto">
          {visibleImages.map((img, index) => (
            <img key={index} src={img} alt={`Customer ${index + 1}`} className="w-[80px] h-[100px] rounded-md object-cover" />
          ))}
        </div>
        {remainingCount > 0 && (
          <button className="w-[80px] h-[100px] flex items-center justify-center rounded-md bg-primary-200 bg-opacity-80 text-white hover:bg-gray-300 transition-colors absolute top-0 right-0 font-albert text-[20px] font-semibold" onClick={() => setIsModalOpen(true)}>
            +{remainingCount}
          </button>
        )}
      </div>
      <ImageModal images={images} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default CustomerPhotos;
