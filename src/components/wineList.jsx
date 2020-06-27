import React from "react";

import "../CSS/wineList.css";

function WineList({ wines, browseWine }) {
  return (
    <div className="wineList">
      {wines &&
        wines.map((wine) => (
          <div key={wine._id} className="winecard">
            <h5 className="winecard-text">{wine.name}</h5>
            <img className="image" src={`${wine.image}`} alt="wine" />
            <div className="winecard-body">
              {/* <ul> */}
              {/* <li className="winecard-text"> {`$${wine.price}`} </li> */}
              {/* </ul> */}
              <button className="button" onClick={() => browseWine(wine._id)}>
                Discover
              </button>
            </div>
          </div>
        ))}
    </div>
  );
}

export default WineList;
