import React, { useState } from "react";
import CollapseVector from "../images/Vector.svg";
const collapseData = [
  {
    title: "Fiabilité",
    content:
      "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes",
  },
  {
    title: "Respect",
    content:
      "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre platforme",
  },
  {
    title: "Service",
    content:
      "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre platforme",
  },
  {
    title: "Sécurité",
    content:
      "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateleirs sur la sécurité domestique pour nos hôtes.",
  },
];

const Collapse = () => {
  const [openItems, setOpenItems] = useState([]);

  const toggle = (i) => {
    if (openItems.includes(i)) {
      setOpenItems(openItems.filter((item) => item !== i));
    } else {
      setOpenItems([...openItems, i]);
    }
  };

  return (
    <div className="wrapper">
      <div className="accordion">
        {collapseData.map((collapseItem, i) => (
          <div className="collapse-item" key={i}>
            <div className="collapse-title">
              <h2>{collapseItem.title}</h2>
              <span>
                <img
                  src={CollapseVector}
                  className={openItems.includes(i) ? "rotate180" : "rotate360"}
                  onClick={() => toggle(i)}
                />
              </span>
            </div>
            <div
              className={
                openItems.includes(i)
                  ? "collapse-content show"
                  : "collapse-content"
              }
            >
              {collapseItem.content}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Collapse;
