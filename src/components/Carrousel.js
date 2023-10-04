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
    <div className="carrousel">
      <img
        src={pictures[currentIndex]}
        alt={`Slide ${currentIndex}`}
        className="carrousel-picture"
      />
      <p className="carrousel-index">
        {currentIndex + 1} / {pictures.length}
      </p>
      <img src={arrowLeft} onClick={prevSlide} className="arrow arrow-left" />
      <img src={arrowRight} onClick={nextSlide} className="arrow arrow-right" />
    </div>
  );
};

export default CarouselComponent;
