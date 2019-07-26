import React, { Component } from "react";
import HeaderDetail from "Components/Header/HeaderDetail";
import { Link } from "react-router-dom";
import numberWithCommas from "Util/numberWithCommas";
import "./ShoppingCart.scss";

class ShoppingCart extends Component {
  state = {
    checkBox: "loginCheck",
    storeBox: "boxShow",
    arrow: "arrow_up"
  };
  handleCartbox = () => {
    if (this.state.storeBox === "boxHide") {
      this.setState({
        storeBox: "boxShow",
        arrow: "arrow_up"
      });
    } else {
      this.setState({
        storeBox: "boxHide",
        arrow: "arrow_down"
      });
    }
  };

  deleteMenu = (menu, index) => {
    let cart = JSON.parse(localStorage.getItem("data"));
    cart.splice(index, 1);
    localStorage.removeItem("data");
    localStorage.setItem("data", JSON.stringify(cart));
  };

  render() {
    const menu = JSON.parse(localStorage.getItem("data"));
    const stores = JSON.parse(localStorage.getItem("stores"));
    let total_price = 0;
    menu.forEach(el => {
      total_price += el.price * el.count;
    });
    return (
      <div className="cart">
        <HeaderDetail link="/detailmenu">담기</HeaderDetail>
        <ul className="cart_menu">
          {menu.map((ele, index) => {
            return (
              <li>
                <div className="list_info">
                  <p>{ele.name}</p>
                  <p>
                    {ele.count}개 {ele.size} {ele.cup_type}
                  </p>
                </div>
                <div className="list_price">
                  <div
                    className="list_delete"
                    onClick={() => this.deleteMenu(ele, index)}
                  >
                    <img
                      src="https://cdn4.iconfinder.com/data/icons/evil-icons-user-interface/64/close2-256.png"
                      alt="닫기 버튼"
                    />
                  </div>
                  <div>{numberWithCommas(ele.price * ele.count)}원</div>
                </div>
              </li>
            );
          })}
        </ul>

        <div className="cart_pay_btn">
          <button onClick={this.handleCartbox}>
            <i className={this.state.arrow}></i>
          </button>
        </div>

        <div className="cart_pay">
          <div className={this.state.storeBox}>
            <div className="cart_count">
              <span>총 {menu.length}개</span>
              <span>{numberWithCommas(total_price)}원</span>
            </div>
            <div className="cart_store">
              <span>{stores.name}</span>
              <Link to="/store">
                <span>변경</span>
              </Link>
            </div>
          </div>
          <Link to="/payment">
            <button className="order_btn">주문 결제하기</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default ShoppingCart;
