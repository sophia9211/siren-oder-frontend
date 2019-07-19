import React, { Component } from "react";
import Chart from "chart.js";

class MonthSalesChart extends Component {
  componentDidMount() {
    const { monthPrice, totalMonthPrice } = this.props;
    let ctx = document.getElementsByClassName("sales_canvas_month")[0];
    let SalesProgressChart = new Chart(ctx, {
      type: "doughnut",
      data: {
        labels: ["월간 누적판매량", "월간 누적판매기준량"],
        datasets: [
          {
            data: [monthPrice, totalMonthPrice],
            backgroundColor: ["rgba(179, 90, 206)"],
            borderColor: ["rgba(56, 115, 71, 0)"],
            borderWidth: 1
          }
        ]
      },
      options: {
        maintainAspectRatio: false,
        animation: {
          easing: "easeInExpo",
          duration: 5000
        },
        padding: {
          left: 100
        },
        legend: {
          display: false
        },
        cutoutPercentage: 70
      }
    });

    SalesProgressChart.canvas.parentNode.style.width = "100px";
  }
  render() {
    return (
      <div className="root_sales_chart">
        <canvas className="sales_canvas_month" />
      </div>
    );
  }
}

export default MonthSalesChart;
