import axios from "axios";
import React, { useEffect, useState } from "react";
import "./App.scss";
import { CardItem } from "./components/cardItem/CardItem";
import { Filter } from "./components/filter/Filter";

export interface Mobile {
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

  const [mobiles, setMobiles] = useState<Mobile[]>([]);
  return (
    <div className="App-wrapper">
      <header className="header">Phone Market</header>
      <main className="main-content">
        <Filter />
        <div className="results-container">
          <ul className="results-list">
            {mobiles.map((mobile) => {
              return <CardItem mobile={mobile} />;
            })}
          </ul>
        </div>
      </main>
    </div>
  );
};

export default App;
