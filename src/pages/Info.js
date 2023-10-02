import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Collapse from "../components/Collapse";
import data from "../components/data.json";

const Info = () => {
  const { appartementData } = data;

  return (
    <div>
      <Header />
      {appartementData.slice(0, 1).map((appartement) => (
        //PASSE DES DONNEES DIFFERENTES DE CELLE DE BASE
        <div key={appartement.id}>
          <Collapse
            data={[{ title: "Description", content: appartement.description }]}
          />
          <Collapse
            data={[
              {
                title: "Équipements",
                content: appartement.equipments.join(" "),
              },
            ]}
          />
        </div>
      ))}
      <Footer />
    </div>
  );
};

export default Info;
