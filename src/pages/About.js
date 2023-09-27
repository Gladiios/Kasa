import React from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import aboutBackgroundImage from "../images/img-src-2.png"; // Importez l'image pour la page About

const About = () => {
  return (
    <div className="main-container">
      <Header />
      <Banner backgroundImage={aboutBackgroundImage} />
      {/* Passez l'image comme une propriété */}
      <Footer />
    </div>
  );
};

export default About;
