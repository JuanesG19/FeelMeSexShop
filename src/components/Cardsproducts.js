
import React from "react";

const Cardsproducts = () => {
  return (
    <section className="offers">
      <div className="container">
        <div className="content">
          <div className="card">
            <div className="card_content">
              <div className="image">
                <img src="static/images/pruebas/prueba5.jpg" alt="product" />
              </div>

              <div className="information_product">
                <h3 style={{ fontWeight: 700 }}>
                  Audifonos Para Mujer para hacer deporte
                </h3>
                <h5 style={{ paddingTop: "8px", color: "black" }}>Categoria</h5>
                <h2 style={{ color: "#f0134d" }}>$360</h2>
              </div>

              <div className="cards_button">
                <button
                  className="cards_btn"
                  style={{ backgroundColor: "#612570" }}
                >
                  Añadir al Carrito
                </button>
                <button
                  className="cards_btn"
                  style={{ backgroundColor: "#f0134d" }}
                >
                  Vista
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cardsproducts;
