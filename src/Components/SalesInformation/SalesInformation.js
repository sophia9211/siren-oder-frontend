import React from "react";
import "./SalesInformation.scss";
import DaySalesChart from "Components/Chart/DaySalesChart/DaySalesChart";

const SalesInformation = ({
  visualPrice,
  visualTitle,
  visualTotalPrice,
  children
}) => {
  return (
    <div className="root_day_sales_information">
      <div className="wrap_num_sales_chart">
        <span className="visual_price">{visualPrice}</span>
        {children}
      </div>
      <div className="wrap_title_visual_price">
        <div className="title_visual_name">{visualTitle}</div>
        <div className="title_visual_total_price">{visualTotalPrice}</div>
      </div>
    </div>
  );
};

export default SalesInformation;
