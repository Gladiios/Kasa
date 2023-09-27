import React from "react";
import data from "./data.json";
import Cards from "./Cards";
console.log(data);

const Gallery = () => {
  return (
    <div className="gallery-container">
      {data.slice(0, 6).map((card) => (
        <Cards key={card.id} card={card} />
      ))}
    </div>
  );
};

export default Gallery;
