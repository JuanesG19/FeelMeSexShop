import React from "react";
import Cardsproducts from "./Cardsproducts";

const Moresell = () => {
  return (
    <div className="moresell">
      <h1 className="cardsproducts_title_homepage">MAS VENDIDOS</h1>
      <Cardsproducts />

      <div className="button_products_homepage">
        <button className="btn_products_homepage">VER MÁS</button>
      </div>
    </div>
  );
};

export default Moresell;
