import axios from "axios";
import React, { useEffect, useState } from "react";
import "./App.scss";

import { CardList } from "./components/cardList/CardList";
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
        <CardList mobiles={mobiles}></CardList>
      </main>
    </div>
  );
};

export default App;
