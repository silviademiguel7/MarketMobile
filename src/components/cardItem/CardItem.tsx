import React from "react";
import { Mobile } from "../../App";
import "./CardItem.scss";

interface Props {
  mobile: Mobile;
}

export const CardItem: React.FC<Props> = ({ mobile }) => {
  return (
    <li className="item-list" key={mobile.id}>
      <div className="card">
        <div className="card__image">
          <img src={mobile.imgUrl} alt="imagen de un mobile" />
        </div>
        <div className="card__data">
          <p className="card__data-brand">Marca: {mobile.brand}</p>
          <p className="card__data-model">Modelo: {mobile.model}</p>
          <p className="card__data-price">Precio: {mobile.price}€</p>
        </div>
      </div>
    </li>
  );
};
