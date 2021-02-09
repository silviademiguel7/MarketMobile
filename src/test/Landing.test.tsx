import {
  findAllByAltText,
  findAllByText,
  findByText,
  getAllByAltText,
  render,
} from "@testing-library/react";
import React from "react";
import { Landing } from "../Landing";
import axios from "axios";
import { BrowserRouter } from "react-router-dom";

jest.mock("axios");

describe("al cargar la  Landing ", () => {
  beforeEach(() => {
    const data = {
      data: [
        {
          brand: "marca1",
          id: "1",
          imgUrl: "imagen1",
          model: "modelo1",
          price: "precio1",
        },
        {
          brand: "marca2",
          id: "2",
          imgUrl: "imagen2",
          model: "modelo2",
          price: "precio2",
        },
        {
          brand: "marca3",
          id: "3",
          imgUrl: "imagen3",
          model: "modelo3",
          price: "precio3",
        },
        {
          brand: "marca4",
          id: "4",
          imgUrl: "imagen4",
          model: "modelo4",
          price: "precio4",
        },
        {
          brand: "marca5",
          id: "5",
          imgUrl: "imagen5",
          model: "modelo5",
          price: "precio5",
        },
      ],
    };

    axios.get.mockImplementationOnce(() => Promise.resolve(data));
  });

  it("se muestra el listado de los moviles", async () => {
    const { findByPlaceholderText, getAllByAltText } = render(
      <BrowserRouter>
        <Landing />
      </BrowserRouter>
    );
    const buscadorPlace = await findByPlaceholderText(
      "Filtra por marca o modelo"
    );
    const imagen = getAllByAltText("imagen de un mobile");
    expect(buscadorPlace).toBeDefined();
    expect(imagen).toHaveLength(5);
  });
});
