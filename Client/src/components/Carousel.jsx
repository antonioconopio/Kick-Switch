import React, { useState } from "react";
import Card from "./Card";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const Carousel = ({ name }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const maxCards = 30;
  const visibleCards = 6;

  // Dummy data for cards
  const cards = Array.from({ length: maxCards }, (_, index) => ({
    id: index + 1,
  }));

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0
        ? maxCards - visibleCards
        : (prevIndex - visibleCards + maxCards) % maxCards
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex + visibleCards) % maxCards === 0
        ? 0
        : (prevIndex + visibleCards) % maxCards
    );
  };

  return (
    <div className="p-16">
      <h1 className="text-xl m-2">{name}</h1>
      <div className="flex items-center">
        {/* Left Arrow */}
        <IoIosArrowBack
          onClick={handlePrev}
          className="hover:cursor-pointer text-2xl"
        />

        {/* Carousel Container */}
        <div className="overflow-hidden w-[80vw] mx-4">
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{
              transform: `translateX(-${(currentIndex * 100) / visibleCards}%)`,
              width: `${(cards.length * 100) / visibleCards}%`,
            }}
          >
            {cards.map((card, index) => (
              <div key={card.id} className="flex-shrink-0 w-[13vw] px-2">
                <Card />
              </div>
            ))}
          </div>
        </div>

        {/* Right Arrow */}
        <IoIosArrowForward
          onClick={handleNext}
          className="hover:cursor-pointer text-2xl"
        />
      </div>
    </div>
  );
};

export default Carousel;
