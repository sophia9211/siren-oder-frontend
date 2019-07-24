import React from "react";
import "./CheckboxCustom.scss";

const CheckboxCustom = ({ className }) => {
  return (
    <div className="check_text">
      <div className={className}>
        <div></div>
      </div>
    </div>
  );
};

export default CheckboxCustom;
