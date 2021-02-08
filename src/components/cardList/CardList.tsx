import React from "react";
import { Mobile } from "../../App";
import { CardItem } from "../cardItem/CardItem";
import "./CardList.scss";

interface Props {
  mobiles: Mobile[];
}
export const CardList: React.FC<Props> = ({ mobiles }) => {
  return (
    <div className="results-container">
      <ul className="results-list">
        {mobiles.map((mobile) => {
          return <CardItem mobile={mobile} />;
        })}
      </ul>
    </div>
  );
};
