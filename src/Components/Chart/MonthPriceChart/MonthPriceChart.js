import React, { Component } from "react";
import "./MonthPriceChart.scss";

class MonthPriceChart extends Component {
  render() {
    return (
      <div className="root_canvas_month_price_chart">
        <canvas className="canvas_month_price_chart" />
      </div>
    );
  }
}

export default MonthPriceChart;
