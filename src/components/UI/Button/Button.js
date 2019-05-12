import React from "react";
import "./Button.css";

const Button = ({ title, classes, click, disabled }) => {
  return (
    <button className={classes} onClick={click} disabled={disabled}>
      {title}
    </button>
  );
};

export default Button;
