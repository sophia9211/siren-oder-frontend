import React from "react";
import "./CategoryButton.scss";

const CategoryButton = ({ className, hoverBox, hoverClass, children }) => {
  return (
    <div className={className}>
      <div className={hoverBox}>{children}</div>
      <div className={hoverClass}></div>
    </div>
  );
};

export default CategoryButton;
