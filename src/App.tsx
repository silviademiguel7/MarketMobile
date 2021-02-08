import axios from "axios";
import React, { useEffect, useState } from "react";
import "./App.scss";
import { Filter } from "./components/Filter";

interface Mobiles {
  brand: string;
  id: string;
  imgUrl: string;
  model: string;
  price: string;
}

const App: React.FC = () => {
  const onLoad = async () => {
    const { data } = await axios.get(
      "https://front-test-api.herokuapp.com/api/product "
    );
    setMobiles(data);
    console.log(data);
  };
  useEffect(() => {
    onLoad();
  }, []);

  const [mobiles, setMobiles] = useState<Mobiles[]>([]);
  return (
    <div className="App-wrapper">
      <header className="header">Phone Market</header>
      <main className="main-content">
        <Filter />
        <div className="results-container">
          <ul className="results-list">
            {mobiles.map((mobile) => {
              return (
                <li className="item-list" key={mobile.id}>
                  <div className="card">
                    <div className="card__image">
                      <img src={mobile.imgUrl} />
                    </div>
                    <div className="card__data">
                      <p className="card__data-brand">Marca: {mobile.brand}</p>
                      <p className="card__data-model">Modelo: {mobile.model}</p>
                      <p className="card__data-price">
                        Precio: {mobile.price}€
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </main>
    </div>
  );
};

export default App;
