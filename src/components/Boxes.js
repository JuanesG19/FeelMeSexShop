import React from "react";
import "boxicons";
import { Link } from "react-router-dom";

const Boxes = () => {
  return (
    <section className="Boxes">
      <div className="Box" style={{ backgroundColor: "#f0134d" }}>
        <div className="Content">
          <box-icon name="low-vision" rotate='180'></box-icon>
          <h3>CONFIDENCIALIDAD</h3>
        </div>
      </div>
      <div className="Box" style={{ backgroundColor: "#612570" }}>
        <div className="Content">
          <box-icon name="package"></box-icon>
          <h3>ENVIO A TODO EL PAIS</h3>{" "}
        </div>
      </div>
      <div className="Box" style={{ backgroundColor: "#FF6F5E" }}>
        <div className="Content">
          <box-icon name="package"></box-icon>
          <h3>ATENCIÓN OPORTUNA </h3>{" "}
        </div>
      </div>
      <div className="Box" style={{ backgroundColor: "#B643CD" }}>
        <div className="Content">
          <box-icon name="money"></box-icon>
          <h3>PRECIOS ASEQUIBLE</h3>{" "}
        </div>
      </div>
    </section>
  );
};

export default Boxes;
