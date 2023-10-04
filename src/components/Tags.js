import React from "react";
import { useParams } from "react-router-dom";
import data from "./data.json";
import StarRating from "./StarRating";

const Tags = () => {
  // Récupérez l'ID depuis les paramètres de l'URL
  const { id } = useParams();

  // Trouvez les données d'appartement pertinentes en utilisant l'ID
  const appartement = data.appartementData.find((a) => a.id === id);

  return (
    <div className="appartement-info">
      <div className="appartement-line1">
        <div className="appartement-column1">
          <div className="appartement-title">
            <p>{appartement.title}</p>
          </div>
          <div className="appartement-location">
            <p>{appartement.location}</p>
          </div>
        </div>
        <div className="host">
          <p>{appartement.host.name}</p>
          <img src={appartement.host.picture}></img>
        </div>
      </div>
      <div className="appartement-line2">
        <div className="tags">
          {appartement.tags.map((tag, index) => (
            <span key={index} className="tag">
              {tag}
            </span>
          ))}
        </div>
        <div className="star-rating">
          <StarRating rating={appartement.rating} />
        </div>
      </div>
    </div>
  );
};

export default Tags;
