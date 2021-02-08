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
  const [filterValue, setFilterValue] = useState("");
  return (
    <div className="App-wrapper">
      <header className="header">Phone Market</header>
      <main className="main-content">
        <Filter onFilterChange={handleFilterChange} filterValue={filterValue} />
        <CardList mobiles={mobiles} filterValue={filterValue}></CardList>
      </main>
    </div>
  );

  function handleFilterChange(event: React.ChangeEvent<HTMLInputElement>) {
    setFilterValue(event.target.value);
  }
};

export default App;
