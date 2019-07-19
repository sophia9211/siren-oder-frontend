import React from "react";
import "./MenuModal.scss";

const MenuModal = ({ onClick, imgSrc, menuName, engName, detailText }) => {
  console.log({ imgSrc });
  return (
    <div className="menu_modal">
      <div className="menu_modal_content">
        <div
          className="menu_modal_img"
          style={{
            backgroundImage: `url("${imgSrc}")`
          }}
        ></div>
        <p className="menu_modal_name">{menuName}</p>
        <p className="menu_modal_eng_name">{engName}</p>
        <p className="menu_modal_detail_text">{detailText}</p>

        <span className="modal_exit" onClick={onClick}>
          메뉴를 설정해 보세요.
        </span>
      </div>
    </div>
  );
};

export default MenuModal;
