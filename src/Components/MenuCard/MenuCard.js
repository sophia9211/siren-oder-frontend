import React from "react";
import "./MenuCard.scss";

const MenuCard = ({ menuImg, menuName, children }) => {
  return (
    <div className="root_menu_card">
      <div className="wrap_menu_card_name">
        <div className="wrap_img_menu_card">
          <img className="img_menu_card" src={menuImg} alt="This is menu pic" />
        </div>
        <div className="menu_name">{menuName}</div>
      </div>
      {children}
    </div>
  );
};

export default MenuCard;
