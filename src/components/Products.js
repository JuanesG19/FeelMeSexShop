import React from "react";
import { Link } from "react-router-dom";


const Products = () => {
  return (
    <>
      <h1 className="title">PRODUCTOS</h1>

      <div className="products">

        {/* pRODUCTO 1 */}
        <div className="product">
          {/* Imagen */}
          <a href="#">
            <div className="product_img">
              <img src="static/images/pruebas/prueba1.jpg" alt="" />
            </div>
          </a>

          {/* Informacion */}
          <div className="product_footer">
            <h1>Title</h1>
            <p>Categoria</p>
            <p className="price">$360</p>
          </div>

          {/* Botones */}
          <div className="buttom">
            <button className="btn">Añadir al Carrito</button>
            <div>
              <a href="#" className="btn">
                Vista
              </a>
            </div>
          </div>
        </div>

        {/* PRODUCTO 2 */}
        <div className="product">
          {/* Imagen */}
          <a href="#">
            <div className="product_img">
              <img src="static/images/pruebas/prueba1.jpg" alt="" />
            </div>
          </a>

          {/* Informacion */}
          <div className="product_footer">
            <h1>Title</h1>
            <p>Categoria</p>
            <p className="price">$360</p>
          </div>

          {/* Botones */}
          <div className="buttom">
            <button className="btn">Añadir al Carrito</button>
            <div>
              <a href="#" className="btn">
                Vista
              </a>
            </div>
          </div>
        </div>

        {/* PRODUCTO 3 */}
        <div className="product">
          {/* Imagen */}
          <a href="#">
            <div className="product_img">
              <img src="static/images/pruebas/prueba1.jpg" alt="" />
            </div>
          </a>

          {/* Informacion */}
          <div className="product_footer">
            <h1>Title</h1>
            <p>Categoria</p>
            <p className="price">$360</p>
          </div>

          {/* Botones */}
          <div className="buttom">
            <button className="btn">Añadir al Carrito</button>
            <div>
              <a href="#" className="btn">
                Vista
              </a>
            </div>
          </div>
        </div>

        {/* PRODUCTO 4 */}
        <div className="product">
          {/* Imagen */}
          <a href="#">
            <div className="product_img">
              <img src="static/images/pruebas/prueba1.jpg" alt="" />
            </div>
          </a>

          {/* Informacion */}
          <div className="product_footer">
            <h1>Title</h1>
            <p>Categoria</p>
            <p className="price">$360</p>
          </div>

          {/* Botones */}
          <div className="buttom">
            <button className="btn">Añadir al Carrito</button>
            <div>
              <a href="#" className="btn">
                Vista
              </a>
            </div>
          </div>
        </div>


        

      </div>
    </>
  );
};

export default Products;