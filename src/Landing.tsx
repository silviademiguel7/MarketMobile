import axios from "axios";
import React, { useEffect, useState } from "react";
import { CardList } from "./components/cardList/CardList";
import { Filter } from "./components/filter/Filter";

export interface Mobile {
  brand: string;
  id: string;
  imgUrl: string;
  model: string;
  price: string;
}

export const Landing: React.FC = ({}) => {
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
    <>
      <Filter onFilterChange={handleFilterChange} filterValue={filterValue} />
      <CardList mobiles={mobiles} filterValue={filterValue}></CardList>
    </>
  );

  function handleFilterChange(event: React.ChangeEvent<HTMLInputElement>) {
    setFilterValue(event.target.value);
  }
};
