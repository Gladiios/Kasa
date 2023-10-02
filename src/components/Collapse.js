import React, { useState } from "react";
import CollapseVector from "../images/Vector.svg";
import data from "./data.json";

const { aboutCollapseData } = data;

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
        {aboutCollapseData.map((collapseItem, i) => (
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
