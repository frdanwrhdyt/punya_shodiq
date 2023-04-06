import React, { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import CarouselItem from "./CarouselItem";
import g8 from "../assets/img/g8.png";

const items = [
  {
    src: g8,
    alt: "Image 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitura liquet in turpis quis ultrices. Nulla gravida libero et lorem ornare, et blandit sapien scelerisque. Vivamus eu sodales ligula. Mauris ut finibus ligula. Vestibulum eget est tristique, vestibulum metus non, iaculis turpis. Sed lobortis leo at magna efficitur euismod. Nam dapibus fringilla neque sit amet interdum.Nulla suscipit facilisis tempus. Mauris mattis viverra justo alaoreet. Sed quis porttitor diam. Duis quis velit vel risus variusrhoncus. Fusce a tempor nunc. Praesent pharetra tristique orci,sit amet gravida lorem auctor et. Vestibulum nec dignissim massa, in interdum odio. Suspendisse purus justo.",
    title: "Perhitungan EBT",
  },
];

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative h-full w-full flex items-center justify-center">
      <div className="overflow-hidden rounded-lg p-12">
        <div
          className="flex transition-all duration-500 ease-in-out space-x-4"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {items.map((item) => (
            <>
              <div className="w-1/3 ">
                <div className="text-6xl font-semibold text-blue-900">
                  {item.title}
                </div>
                <div className="">{item.description}</div>
              </div>
              <CarouselItem key={item.src} src={item.src} alt={item.alt} />
            </>
          ))}
        </div>
      </div>
      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-40 p-2 rounded-full shadow-lg hover:bg-opacity-100 focus:outline-none"
        onClick={handlePrev}
      >
        <ChevronLeftIcon className="h-6 w-6" />
      </button>
      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-40 p-2 rounded-full shadow-lg hover:bg-opacity-100 focus:outline-none"
        onClick={handleNext}
      >
        <ChevronRightIcon className="h-6 w-6" />
      </button>
    </div>
  );
};

export default Carousel;
