import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { CardItem } from "./components/cardItem/CardItem";

const Detalle = () => {
  const { id } = useParams();
  let history = useHistory();
  const [mobile, setMobile] = useState({});

  const onLoad = async () => {
    const { data } = await axios.get(
      "https://front-test-api.herokuapp.com/api/product"
    );

    const mobileId = data.filter((mobile) => id === mobile.id);

    setMobile(...mobileId);
  };

  useEffect(() => {
    onLoad();
  }, []);

  return (
    <>
      <CardItem mobile={mobile} />
      <div style={{ marginTop: "10px" }}>
        <button onClick={() => history.push("/mobiles")}>Volver</button>
        <input
          type="button"
          onClick="history.back()"
          name="volver atrás"
          value="volver atrás"
        ></input>
      </div>
    </>
  );
};
export default Detalle;
