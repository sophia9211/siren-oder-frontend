import React from "react";
import "./ArrowDiv.scss";

const ArrowDiv = ({ children, className }) => {
  return (
    <div className={className}>
      <div>{children}</div>
      <div />>
      <div className="right_arrow">
        <img
          src="https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-right-01-256.png"
          alt="arrow"
        />
      </div>
    </div>
  );
};

export default ArrowDiv;
