import React, { Component } from "react";
import HeaderDetail from "Components/Header/HeaderDetail";
import "./History.scss";

class History extends Component {
  render() {
    const menu = JSON.parse(localStorage.getItem("cart"));
    return (
      <div>
        <HeaderDetail>히스토리</HeaderDetail>
        <div className="history">
          <div className="history_title">회원님의 주문 목록입니다.</div>
          <ul>
            {menu.map(ele => {
              return (
                <li className="history_lists">
                  <div className="history_img">
                    <img />
                  </div>
                  <div className="history_text">
                    <div>{ele.name}</div>
                    <div>
                      <span>2019.06.15</span>
                      <span>강남점</span>
                      <span>{ele.price}원</span>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}
export default History;
