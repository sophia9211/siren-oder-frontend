import React from "react";
import "./AdminFooter.scss";

const AdminFooter = ({ nextOrder, todayPrice, monthPrice }) => {
  return (
    <footer className="admin_footer">
      <div className="wrap_next_order_price">
        <div className="next_order">다음주문</div>
        <div className="next_order">{nextOrder}</div>
        <div className="today_sales_amount_title">금일판매금액</div>
        <div className="today_sales_amount">{todayPrice}</div>
        <div className="month_sales_amount_title">이번달누적판매금액</div>
        <div className="month_sales_amount">{monthPrice}</div>
      </div>
    </footer>
  );
};

export default AdminFooter;
