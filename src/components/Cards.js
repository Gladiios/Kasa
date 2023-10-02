import React from "react";
import data from "./data.json";

const { appartementData } = data;

const Cards = ({ card }) => {
  return (
    <div className="gallery-card">
      <img src={card.cover} className="card-img" />
      <h4 className="card-title">{card.title}</h4>
    </div>
  );
};

export default Cards;
