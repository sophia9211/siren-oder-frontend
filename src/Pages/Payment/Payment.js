import React, { Component } from "react";
import HeaderDetail from "Components/Header/HeaderDetail";
import RadioButton from "Components/RadioButton";
import CheckboxCustom from "Components/Checkbox/CheckboxCustom";
import ArrowDiv from "Components/ArrowDiv";
import "./Payment.scss";

class Payment extends Component {
  state = {
    arrow: "arrow_down",
    box: "boxHide"
  };

  order = () => {
    let date = new Date() + "";
    let arr = date.split(" ");
    let arr1 = arr[3] + " " + arr[1] + " " + arr[2] + " " + arr[4];
    console.log(arr1);
    return arr1;
  };

  render() {
    const menu = JSON.parse(localStorage.getItem("cart"));
    let total_price = 0;
    menu.forEach(el => {
      total_price += el.price * el.count;
    });
    return (
      <div className="payment">
        <HeaderDetail link="/detailmenu">결제하기</HeaderDetail>
        <div className="payment_lists">
          <div className="payment_title">주문 매장</div>
          <div className="payment_store">
            <p>강남 1호점</p>
            <p>서울시 강남구 대치동</p>
          </div>

          <div className="payment_title">주문 옵션</div>
          <div className="payment_option">
            <p>포장 옵션</p>
            <div className="check_flex">
              <CheckboxCustom className="check_fill" />
              <p>
                전체 포장 <br />
                (음료는 캐리어에, 푸드와 상품은 종이백에 포장)
              </p>
            </div>
          </div>

          <div className="payment_title">결제</div>
          <div className="payment_method">
            <p>결제 수단</p>
            <div className="payment_lists">
              <RadioButton className="radio_btn">스타벅스 카드</RadioButton>
              <RadioButton className="radio_btn_fill">신용카드</RadioButton>
              <RadioButton className="radio_btn">SSG PAY</RadioButton>
            </div>
          </div>

          <ArrowDiv className="arrow_div">쿠폰사용</ArrowDiv>
          <ArrowDiv className="arrow_div">제휴카드 할인</ArrowDiv>
          <ArrowDiv className="arrow_none">e-Gift 아이템 사용</ArrowDiv>

          <div className="payment_title">최종 결제할 메뉴</div>
          <ul className="payment_menu">
            {menu.map(ele => {
              return (
                <li className="menu_lists">
                  <div className="menu_lists_fir">
                    <div>{ele.name}</div>
                  </div>
                  <div className="menu_lists_sec">
                    <span className="menu_lists_thir">
                      {ele.count}개 / {ele.ICED} / {ele.size} / {ele.cup}
                    </span>
                    <span>{ele.price * ele.count}원</span>
                  </div>
                </li>
              );
            })}
          </ul>
          <div className="payment_count">
            <div className="payment_count_fir">
              <span>총 주문 금액</span>
              <span>{total_price}원</span>
            </div>

            <div className="payment_count_sec">
              <span>총 할인 금액</span>
              <span className="discount">- 0원</span>
            </div>

            <div className="payment_count_thir">
              <span>최종 결제 금액</span>
              <span>{total_price}원</span>
            </div>
          </div>
          <div className="payment_btn_bg">
            <div className="payment_btn" onClick={this.order}>
              결제 및 주문하기
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Payment;
