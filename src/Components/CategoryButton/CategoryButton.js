import React from "react";
import "./CategoryButton.scss";

const CategoryButton = ({
  className,
  hoverBox,
  hoverClass,
  children,
  onClick
}) => {
  return (
    <div className={className} onClick={onClick}>
      <div className={hoverBox}>{children}</div>
      <div className={hoverClass}></div>
    </div>
  );
};

export default CategoryButton;
