import React from "react";
import "./Button.scss";

const Button = ({ className, value, onClick }) => {
  return (
    <div className={className}>
      <input type="submit" value={value} onClick={onClick} />
    </div>
  );
};

export default Button;
