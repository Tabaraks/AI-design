import React from "react";
import "./button.scss";

const Button = ({ btntext, btnStyle = false }) => {
  return (
    <button
      className={`signUpBtn ${btnStyle ? "btnFormatting" : ""}`}
      type="button"
    >
      {btntext}
    </button>
  );
};

export default Button;
