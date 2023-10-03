import React from "react";
import { useParams } from "react-router-dom";
import data from "./data.json";

const Tags = () => {
  // Récupérez l'ID depuis les paramètres de l'URL
  const { id } = useParams();

  // Trouvez les données d'appartement pertinentes en utilisant l'ID
  const appartement = data.appartementData.find((a) => a.id === id);

  return (
    <div>
      {appartement.tags.map((tag, index) => (
        <span key={index} className="tag">
          {tag}
        </span>
      ))}
    </div>
  );
};

export default Tags;
