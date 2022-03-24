import React from "react";
import Cardsproducts from "./Cardsproducts";

const Offers = () => {
  return (
    <div className="offer">
      <h1 className="cardsproducts_title_homepage">OFERTAS</h1>
      <Cardsproducts />

      <div className="button_products_homepage">
        <button className="btn_products_homepage">VER MÁS</button>
      </div>
    </div>
  );
};
export default Offers;
