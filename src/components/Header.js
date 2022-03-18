import React from "react";

const Header = () => {
  return (
    <header>
      <a href="#">
        <div className="logo">
          <img src="static/images/logo.png" alt="logo" width="120" />
        </div>
      </a>

      <ul>
        <li>
          <a href="#">Usuario</a>
        </li>
        <li>
          <a href="#">Idioma</a>
        </li>
      </ul>

      <div className="cart">
        <box-icon name="cart"></box-icon>
        <span className="item__total">0</span>
      </div>
    </header>
  );
};

export default Header;
