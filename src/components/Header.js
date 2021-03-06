import React from "react";
import "boxicons";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Link to="/">
        <div className="logo">
          <img src="static/images/logo.png" alt="logo" width="120" />
          <img src="static/images/logo2.png" alt="logo2" width="300" />
        </div>
      </Link>

      <div className="buttonsNav">
        <ul className="taskNav">
          <li>
            <Link to="/user">Usuario</Link>
          </li>
          <li>
            <Link to="/products">Productos</Link>
          </li>
        </ul>

        <div className="cartIcon">
          <box-icon name="cart"></box-icon>
          <span className="item__total">0</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
