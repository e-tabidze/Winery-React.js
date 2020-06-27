import React from "react";
import "../CSS/searchBox.css";

const SearchBox = ({ value, onChange }) => {
  return (
    <div className="searchBox">
      <input
        className="searchInput"
        type="text"
        name="query"
        placeholder="Search here..."
        value={value}
        onChange={(e) => onChange(e.currentTarget.value)}
      />
    </div>
  );
};

export default SearchBox;
