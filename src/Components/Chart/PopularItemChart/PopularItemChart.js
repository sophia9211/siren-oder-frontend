import React, { Component } from "react";
import Chart from "chart.js";
import "./PopularItemChart.scss";

class PopularItemChart extends Component {
  componentDidMount() {
    const { itemList } = this.props;
    console.log(itemList);
    let ctx = document.getElementsByClassName("popular_canvas_month")[0];
    let PopularItem = new Chart(ctx, {
      type: "pie",
      data: {
        labels: [
          itemList["name"][0],
          itemList["name"][1],
          itemList["name"][2],
          itemList["name"][3],
          itemList["name"][4]
        ],
        datasets: [
          {
            data: [
              itemList["amount"][0],
              itemList["amount"][1],
              itemList["amount"][2],
              itemList["amount"][3],
              itemList["amount"][4]
            ],
            backgroundColor: [
              "rgba(253, 194, 64)",
              "rgba(90, 202, 184)",
              "rgba(211, 103, 104)",
              "rgba(176, 165, 202)",
              "rgba(13, 123, 213)"
            ],
            borderColor: ["rgba(56, 115, 71, 0)"],
            borderWidth: 1
          }
        ]
      },
      options: {
        title: {
          display: true,
          text: "인기상품 TOP 5",
          position: "bottom",
          fontSize: 20
        },
        maintainAspectRatio: false,
        animation: {
          easing: "easeInExpo",
          duration: 5000
        },
        padding: {
          left: 100
        },
        legend: {
          display: false,
          position: "bottom"
        }
      }
    });

    PopularItem.canvas.parentNode.style.width = "100px";
  }
  render() {
    return (
      <div className="root_popular_chart">
        <canvas className="popular_canvas_month" />
      </div>
    );
  }
}

export default PopularItemChart;
