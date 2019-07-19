import React, { Component } from "react";
import Chart from "chart.js";

class TimeOrderAmountChart extends Component {
  componentDidMount() {
    const { amount } = this.props;
    console.log(amount);
    let ctx = document.getElementsByClassName("realtime_amount_canvas")[0];
    let amountChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: [
          "7시-9시",
          "9시-11시",
          "11시-13시",
          "13시-15시",
          "15시-17시",
          "17시-19시",
          "19시-21시",
          "21시-23시"
        ],
        datasets: [
          {
            data: [
              amount["order_amount"]["7to9"],
              amount["order_amount"]["9to11"],
              amount["order_amount"]["11to13"],
              amount["order_amount"]["13to15"],
              amount["order_amount"]["15to17"],
              amount["order_amount"]["17to19"],
              amount["order_amount"]["19to21"],
              amount["order_amount"]["21to23"]
            ],
            backgroundColor: ["rgba(75, 192, 192, 0.2)"],
            borderColor: ["rgba(34, 150, 243)"],
            borderWidth: 1
          }
        ]
      },
      options: {
        title: {
          display: true,
          position: "bottom",
          text: "시간별 주문량",
          fontSize: 20
        },
        animation: {
          duration: 5000,
          easing: "easeInExpo"
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
                max: 100,
                stepSize: 10
              }
            }
          ]
        }
      }
    });

    amountChart.canvas.parentNode.style.width = "100%";
    amountChart.canvas.parentNode.style.height = "400px";
  }
  render() {
    return (
      <div className="root_realtime_amount_chart">
        <canvas className="realtime_amount_canvas" />
      </div>
    );
  }
}

export default TimeOrderAmountChart;
