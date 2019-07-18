import React, { Component } from "react";
import Chart from "chart.js";

class MonthPriceChart extends Component {
  componentDidMount() {
    const { monthPrice } = this.props;
    console.log(monthPrice);
    let canvas = document.getElementsByClassName("month_price_canvas")[0];
    let ctx = canvas.getContext("2d");

    var gradientFill = ctx.createLinearGradient(0, 0, 0, 400);
    gradientFill.addColorStop(0, "rgba(34, 150, 243,0.6)");
    gradientFill.addColorStop(1, "rgba(28, 240, 162,0.4)");

    let perMonthPrice = new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["1월", "2월", "3월", "4월", "5월", "6월", "7월"],
        datasets: [
          {
            data: [
              monthPrice["price"][0],
              monthPrice["price"][1],
              monthPrice["price"][2],
              monthPrice["price"][3],
              monthPrice["price"][4],
              monthPrice["price"][5],
              monthPrice["price"][6]
            ],
            backgroundColor: [
              gradientFill,
              gradientFill,
              gradientFill,
              gradientFill,
              gradientFill,
              gradientFill,
              gradientFill
            ],
            borderColor: ["rgba(34, 150, 243)"],
            borderWidth: 1
          }
        ]
      },
      options: {
        title: {
          display: true,
          position: "bottom",
          text: "월별 매출량",
          fontSize: 20
        },
        animation: {
          duration: 5000,
          easing: "easeInOutBlack"
        },
        maintainAspectRatio: false,
        padding: {
          left: 100
        },
        legend: {
          display: false
        },
        cutoutPercentage: 70,
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
                min: 0,
                max: 300000000,
                stepSize: 30000000
              }
            }
          ]
        }
      }
    });

    perMonthPrice.canvas.parentNode.style.width = "97%";
    perMonthPrice.canvas.parentNode.style.height = "400px";
  }
  render() {
    return (
      <div className="root_month_price_chart">
        <canvas className="month_price_canvas" />
      </div>
    );
  }
}

export default MonthPriceChart;
