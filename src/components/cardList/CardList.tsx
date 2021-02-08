import React from "react";
import { Mobile } from "../../App";
import { CardItem } from "../cardItem/CardItem";
import "./CardList.scss";

interface Props {
  mobiles: Mobile[];
  filterValue: string;
}
export const CardList: React.FC<Props> = ({ mobiles, filterValue }) => {
  return (
    <div className="results-container">
      <ul className="results-list">
        {mobiles
          .filter((mobile) => {
            return (
              mobile.brand.toUpperCase().includes(filterValue.toUpperCase()) ||
              mobile.model.toUpperCase().includes(filterValue.toUpperCase()) ||
              filterValue === ""
            );
          })
          .map((mobile) => {
            return <CardItem mobile={mobile} />;
          })}
      </ul>
    </div>
  );
};
