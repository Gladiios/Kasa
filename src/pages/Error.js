import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { NavLink } from "react-router-dom";

const Error = () => {
  return (
    <div className="main-container">
      <div className="second-container">
        <Header />
        <div className="error-container">
          <h1>404</h1>
          <span>Oups! La page que vous demandez n'existe pas.</span>
          <NavLink to="/">
            <p id="home">Retourner sur la page d'accueil</p>
          </NavLink>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Error;
