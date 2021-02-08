import React from "react";
import "./Filter.scss";

interface Props {
  onFilterChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  filterValue: string;
}
export const Filter: React.FC<Props> = ({ onFilterChange, filterValue }) => {
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
          onChange={onFilterChange}
          value={filterValue}
        />
      </div>
    </>
  );
};
