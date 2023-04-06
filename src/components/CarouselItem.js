import React from "react";

const CarouselItem = ({ src, alt }) => {
  return (
    <div className="flex justify-center items-center">
      <img src={src} alt={alt} className="max-h-96 w-full object-contain " />
    </div>
  );
};

export default CarouselItem;
