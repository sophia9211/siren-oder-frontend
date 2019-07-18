import React, { Component } from "react";
import Chart from "chart.js";

class RealTimeOrderChart extends Component {
  componentDidMount() {
    const { value } = this.props;
    console.log(value);
    let ctx = document.getElementsByClassName("realtime_canvas")[0];
    let realtimeOrder = new Chart(ctx, {
      type: "bar",
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
              value["timeToValue"]["7to9"],
              value["timeToValue"]["9to11"],
              value["timeToValue"]["11to13"],
              value["timeToValue"]["13to15"],
              value["timeToValue"]["15to17"],
              value["timeToValue"]["17to19"],
              value["timeToValue"]["19to21"],
              value["timeToValue"]["21to23"]
            ],
            backgroundColor: [
              "rgba(34, 150, 243)",
              "rgba(34, 150, 243)",
              "rgba(34, 150, 243)",
              "rgba(34, 150, 243)",
              "rgba(34, 150, 243)",
              "rgba(34, 150, 243)",
              "rgba(34, 150, 243)",
              "rgba(34, 150, 243)"
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
          text: "시간별 매출량",
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
                max: 1000000,
                stepSize: 100000
              }
            }
          ]
        }
      }
    });

    realtimeOrder.canvas.parentNode.style.width = "600px";
    realtimeOrder.canvas.parentNode.style.height = "400px";
  }
  render() {
    return (
      <div className="root_realtime_chart">
        <canvas className="realtime_canvas" />
      </div>
    );
  }
}

export default RealTimeOrderChart;
