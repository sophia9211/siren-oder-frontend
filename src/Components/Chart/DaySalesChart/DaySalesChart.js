import React, { Component } from "react";
import Chart from "chart.js";

class DaySalesChart extends Component {
  componentDidMount() {
    const { todayPrice, totalPrice } = this.props;
    let ctx = document.getElementsByClassName("sales_canvas")[0];
    let SalesProgressChart = new Chart(ctx, {
      type: "doughnut",
      data: {
        labels: ["금일판매량", "금일판매기준량"],
        datasets: [
          {
            data: [todayPrice, totalPrice],
            backgroundColor: ["rgba(56, 115, 71)"],
            borderColor: ["rgba(250, 237, 51, 1)"],
            borderWidth: 1
          }
        ]
      },
      options: {
        maintainAspectRatio: false,
        animation: {
          duration: 5000,
          easing: "easeInExpo"
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
        <canvas className="sales_canvas" />
      </div>
    );
  }
}

export default DaySalesChart;
