import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div className="menuHomepage">
      <ul className="menu">
        <li>
          <Link to="/" className="btnMenu">Para Mujeres</Link>
        </li>
        <li>
          <Link to="/" className="btnMenu">Para Hombres</Link>
        </li>
        <li>
          <Link to="/" className="btnMenu">Para Parejas</Link>
        </li>
        <li>
          <Link to="/" className="btnMenu">Aceites Y Lubricantes</Link>
        </li>
        <li>
          <Link to="/" className="btnMenu">Juguetes Anales</Link>
        </li>
        <li>
          <Link to="/" className="btnMenu">Dildos</Link>
        </li>
        <li>
          <Link to="/" className="btnMenu">BDSM</Link>
        </li>
        <li>
          <Link to="/"className="btnMenu">Lenceria</Link>
        </li>
        <li>
          <Link to="/" className="btnMenu">Salud</Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
