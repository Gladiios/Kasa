import React from "react";
import { NavLink } from "react-router-dom";

const Cards = ({ card }) => {
  return (
    <NavLink to={`/info/${card.id}`}>
      <div className="gallery-card">
        <img src={card.cover} className="card-img" />
        <h4 className="card-title">{card.title}</h4>
      </div>
    </NavLink>
  );
};

export default Cards;
