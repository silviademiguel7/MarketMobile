import React from "react";
import { Link } from "react-router-dom";
import { Mobile } from "../../Landing";

import "./CardItem.scss";

interface Props {
  mobile: Mobile;
}

export const CardItem: React.FC<Props> = ({ mobile }) => {
  return (
    <Link to={`/mobiles/${mobile.id}`}>
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
    </Link>
  );
};
