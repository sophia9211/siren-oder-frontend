import React, { Component } from "react";
import HeaderDetail from "Components/Header/HeaderDetail";
import "./ShoppingCart.scss";

class ShoppingCart extends Component {
  state = {
    checkBox: "loginCheck",
    storeBox: "boxShow"
  };
  handleOnclickChecked = () => {
    if (this.state.checkBox === "loginCheckNone") {
      this.setState({
        checkBox: "loginCheck"
      });
    } else {
      this.setState({
        checkBox: "loginCheckNone"
      });
    }
  };
  handleCartbox = () => {
    if (this.state.storeBox === "boxHide") {
      this.setState({
        storeBox: "boxShow"
      });
    } else {
      this.setState({
        storeBox: "boxHide"
      });
    }
  };
  render() {
    const test = { a: 4000, b: 5000 };
    return (
      <div className="cart">
        <HeaderDetail link="/detailmenu">담기</HeaderDetail>
        <ul className="cart_menu">
          <li>
            <div className="list_check" onClick={this.handleOnclickChecked}>
              <div id={this.state.checkBox}></div>
              {/* <label id="loginCheckLabel" for="loginCheck">
                로
              </label> */}
            </div>
            <div className="list_info">
              <p>별다방 아이스티</p>
              <p>ICED/TALL/개인컵</p>
            </div>
            <div className="list_price">
              <div className="list_delete">
                <img
                  src="https://cdn4.iconfinder.com/data/icons/evil-icons-user-interface/64/close2-256.png"
                  alt="닫기 버튼"
                />
              </div>
              <div>{test.a}원</div>
            </div>
          </li>
        </ul>

        <div className="cart_pay_btn">
          <button onClick={this.handleCartbox}>접기</button>
        </div>

        <div className="cart_pay">
          <div className={this.state.storeBox}>
            <div className="cart_count">
              <span>총 3개</span>
              <span>10000원</span>
            </div>
            <div className="cart_store">
              <span>주소</span>
              <span>변경</span>
            </div>
          </div>
          <button>주문 결제하기</button>
        </div>
      </div>
    );
  }
}

export default ShoppingCart;
