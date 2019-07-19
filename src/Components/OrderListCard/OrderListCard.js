import React from "react";
import MenuCard from "../MenuCard";
import "./OrderListCard.scss";

const OrderListCard = ({
  orderNum,
  menuImg,
  orderItem,
  orderUser,
  handleReadyClick,
  handleFinishClick
}) => {
  return (
    <div className="wrap_order_list_card">
      <div className="order_list_box">{orderNum}</div>
      <MenuCard menuImg={menuImg} />
      <div className="wrap_menu_card_customer">
        <div className="order_food">
          주문내용
          <li>{orderItem}</li>
        </div>

        <div className="order_customer">주문자 : {orderUser}</div>
        <div className="wrap_button">
          <button className="ready_order_btn" onClick={handleReadyClick}>
            준비중
          </button>
          <button className="finish_order_btn" onClick={handleFinishClick}>
            완료
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderListCard;
