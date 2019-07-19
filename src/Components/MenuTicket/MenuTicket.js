import React from "react";
import "./MenuTicket.scss";

const MenuTicket = ({ engName, imgSrc, price, menuName }) => {
  return (
    <div className={"menu_tiket_contain_box"}>
      <div
        style={{
          backgroundImage: `url("${imgSrc}")`
        }}
        className="img_menu_tiket"
      >
        <img className="img_menu_none" src={imgSrc} />
      </div>
      <div className="menu_tiket_name_box">
        <div className="menu_tiket_name">{menuName}</div>
        <div className="menu_tiket_eng_name">{engName}</div>
        <div className="menu_tiket_price">{price}</div>
      </div>
    </div>
  );
};

export default MenuTicket;
