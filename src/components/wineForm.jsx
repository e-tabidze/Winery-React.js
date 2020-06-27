import React, { useState, useEffect } from "react";
import { getWine } from "../data/wines";
import "../CSS/wineModal.css";

const WineForm = ({ showModal, wineId, handleToggleModal }) => {
  const [wine, setWine] = useState(null);

  useEffect(() => {
    let objWine = getWine(wineId);
    setWine(objWine);
  }, [wineId]);

  return (
    <div className={showModal ? "wineForm wineForm-active" : "wineForm"}>
      <div className="modalContent">
        <div className="modalImage">
          <img
            className="modalImage"
            src={wine && `${wine.image}`}
            alt="wine"
          />
        </div>
        <div className="modalText">
          <button onClick={() => handleToggleModal()}>X</button>
          {wine && <span>{wine.name}</span>}
        </div>
      </div>
    </div>
  );
};

export default WineForm;
