import React from "react";
import "./Button.scss";

const Button = ({ text, showMore }) => {
  return (
    <button onClick={showMore} className="button">
      {text}
    </button>
  );
};

export default Button;
