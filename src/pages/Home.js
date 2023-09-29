import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import Gallery from "../components/Gallery";
import homeBackgroundImage from "../images/IMG.png";

const Home = () => {
  return (
    <div className="main-container">
      <div className="second-container">
        <Header />
        <Banner backgroundImage={homeBackgroundImage} showText={true} />{" "}
        {/* Affiche le texte sur la page d'accueil */}
        <Gallery />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
