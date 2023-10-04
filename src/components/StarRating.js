import React from "react";

const StarRating = ({ rating }) => {
  // Créer un tableau de 5 étoiles avec une couleur conditionnelle
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <i
        key={i}
        className={`fa-solid fa-star ${i <= rating ? "text-red" : "text-grey"}`}
      ></i>
    );
  }

  return <div className="star-rating">{stars}</div>;
};

export default StarRating;
