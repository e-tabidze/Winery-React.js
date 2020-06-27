import React from "react";
import red from "../photos/red.jpg";

import "../CSS/wineExample.css";

const WineExample = () => {
  return (
    <div>
      <h1>Saperavi</h1>
      <img className="wineExample" src={red} alt="redWine" />
    </div>
  );
};

export default WineExample;
