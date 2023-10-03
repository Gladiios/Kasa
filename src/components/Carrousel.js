import React, { useState } from "react";
import arrowLeft from "../images/arrow_left.png";
import arrowRight from "../images/arrow_right.png";

const CarouselComponent = ({ pictures }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === pictures.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
    );
  };

  if (!pictures) {
    return <p>Chargement des images...</p>;
  }

  return (
    <div className="carousel">
      <img src={pictures[currentIndex]} alt={`Slide ${currentIndex}`} />
      <img src={arrowLeft} onClick={prevSlide} />
      <img src={arrowRight} onClick={nextSlide} />
    </div>
  );
};

export default CarouselComponent;
