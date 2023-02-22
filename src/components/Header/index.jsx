import React from "react";
import image from "./assets/Everlance.png";
import "./Header.scss";

const Header = () => {
  return (
    <nav className="nav">
      <a className="nav--logo" href="/">
        <img className="nav--img" src={image} alt="Everlance" />
        <p>Everlance inc.</p>
      </a>
    </nav>
  );
};

export default Header;
