import React from "react";

const Banner = ({ backgroundImage, showText }) => {
  return (
    <div
      className="banner"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      {showText && (
        <p className="banner-text">Chez vous, partout et ailleurs</p>
      )}
    </div>
  );
};

export default Banner;
