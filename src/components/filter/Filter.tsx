import React from "react";
import "./Filter.scss";

export const Filter: React.FC = () => {
  return (
    <>
      <div className="search-container__filterInput">
        <label htmlFor="inputText"></label>
        <input
          type="text"
          className="input"
          name="inputText"
          id="inputText"
          placeholder="Filtra por marca o modelo"
        />
      </div>
    </>
  );
};
