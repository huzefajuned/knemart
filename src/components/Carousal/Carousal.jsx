import React, { useState } from "react";
import { CarousalData } from "./data";
import { BiSolidLeftArrow, BiSolidRightArrow } from "react-icons/bi";

const Carousal = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // onclick next arrrow---
  const handleNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === CarousalData.length - 1 ? 0 : prevIndex + 1
    );
  };

  // onclick back arrrow---
  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? CarousalData.length - 1 : prevIndex - 1
    );
  };

  // both arrrow size---
  const arrowSize = 70;

  return (
    <div className="  w-full justify-between p-2 relative flex flex-row gap-2 items-center">
      {/* back arrow--- */}
      <BiSolidLeftArrow
        size={arrowSize}
        onClick={handlePrev}
        className="cursor-pointer text-gray-500 hover:text-red-200"
      />

      <div>
        {CarousalData.map((carousal, index) => (
          <div
            key={carousal.id}
            className={`flex flex-col gap-2 ${
              index === currentImageIndex ? "block" : "hidden"
            }`}
          >
            <img
              src={carousal.imageURL}
              alt={carousal.id}
              className="w-full h-80 object-cover rounded-md"
            />
          </div>
        ))}
      </div>

      {/* next arrow--- */}
      <BiSolidRightArrow
        size={arrowSize}
        onClick={handleNext}
        className="cursor-pointer text-gray-500 hover:text-red-200"
      />
    </div>
  );
};

export default Carousal;
