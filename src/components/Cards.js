import React from "react";
import Info from "../pages/Info";
import { NavLink } from "react-router-dom";

const Cards = ({ card }) => {
  return (
    <NavLink to="/Info">
      <div className="gallery-card">
        <img src={card.cover} className="card-img" />
        <h4 className="card-title">{card.title}</h4>
      </div>
    </NavLink>
  );
};

export default Cards;
