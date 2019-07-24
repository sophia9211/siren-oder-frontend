import React from "react";
import "./RadioButton.scss";

const RadioButton = ({ className, children }) => {
  return (
    <div className="radio_text">
      <div className={className}>
        <div></div>
      </div>
      <p>{children}</p>
    </div>
  );
};

export default RadioButton;
