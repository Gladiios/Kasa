import React, { useState } from "react";
import CollapseVector from "../images/Vector.svg";

const Collapse = ({ data }) => {
  //PASSE LA PROP DATA AU COMPOSANT COLLAPSE
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
        {data.map(
          //MAP DE DATA
          (item, i) => (
            <div className="collapse-item" key={i}>
              <div className="collapse-title">
                <h2>{item.title}</h2>
                <span>
                  <img
                    src={CollapseVector}
                    className={
                      openItems.includes(i) ? "rotate180" : "rotate360"
                    }
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
                {item.content}
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Collapse;
