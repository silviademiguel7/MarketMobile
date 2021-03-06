import React from "react";
import { Mobile } from "../../Landing";

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
          .map((mobile, index) => {
            return <CardItem mobile={mobile} key={index} />;
          })}
      </ul>
    </div>
  );
};
