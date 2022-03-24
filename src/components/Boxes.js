import React from "react";
import "boxicons";
import { Link } from "react-router-dom";

const Boxes = () => {
  return (
    <section className="Boxes">
      <Link to="/" className="Box" style={{ backgroundColor: "#f0134d" }}>
        <div className="Content">
          <img src="static/images/icons/silence.png" alt="silence" />
          <h2>CONFIDENCIALIDAD</h2>
        </div>
      </Link>

      <Link to="/" className="Box" style={{ backgroundColor: "#612570" }}>
        <div className="Content">
          <img src="static/images/icons/box.png" alt="silence" />
          <h2>ENVIO A TODO EL PAIS</h2>
        </div>
      </Link>

      <Link to="/" className="Box" style={{ backgroundColor: "#FF6F5E" }}>
        <div className="Content">
          <img src="static/images/icons/whatsapp.png" alt="silence" />
          <h2>ATENCIÓN OPORTUNA </h2>
        </div>
      </Link>

      <Link to="/" className="Box" style={{ backgroundColor: "#B643CD" }}>
        <div className="Content">
          <img src="static/images/icons/dinero.png" alt="silence" />
          <h2>PRECIOS ASEQUIBLE</h2>
        </div>
      </Link>
    </section>
  );
};

export default Boxes;
