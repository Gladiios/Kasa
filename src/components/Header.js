import React from "react";
import logoKasa from "../images/LOGO.svg";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <img src={logoKasa} alt="logo Kasa" />
      <div className="links">
        <NavLink to="/">
          <p id="home">Accueil</p>
        </NavLink>
        <NavLink to="/about">
          <p id="about">A Propos</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
