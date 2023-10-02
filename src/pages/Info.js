import React from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Collapse from "../components/Collapse";
import data from "../components/data.json";

const Info = () => {
  const { id } = useParams();
  console.log("id from params: ", id);
  const appartement = data.appartementData.find((apt) => apt.id === id);

  if (!appartement) return <div>Appartement non trouvé</div>;

  return (
    <div>
      <Header />
      <div>
        <Collapse
          data={[{ title: "Description", content: appartement.description }]}
        />
        <Collapse
          data={[
            { title: "Équipements", content: appartement.equipments.join(" ") },
          ]}
        />
      </div>
      <Footer />
    </div>
  );
};

export default Info;
