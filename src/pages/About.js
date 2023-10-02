import React from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import aboutBackgroundImage from "../images/img-src-2.png";
import Collapse from "../components/Collapse";
import data from "../components/data.json";

const About = () => {
  return (
    <div className="main-container">
      <div className="second-container">
        <Header />
        <Banner backgroundImage={aboutBackgroundImage} />
        {/* Passe l'image comme une propriété */}
        <Collapse
          data={
            data.aboutCollapseData
          } /*PASSE LE PROP DATA AU COMPOSANT COLLAPSE*/
        />
      </div>
      <Footer />
    </div>
  );
};

export default About;
