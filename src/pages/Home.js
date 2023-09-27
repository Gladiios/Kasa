import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import Gallery from "../components/Gallery";
import homeBackgroundImage from "../images/IMG.png";

const Home = () => {
  return (
    <div className="main-container">
      <Header />
      <Banner backgroundImage={homeBackgroundImage} showText={true} />{" "}
      {/* Affiche le texte sur la page d'accueil */}
      <Gallery />
      <Footer />
    </div>
  );
};

export default Home;
