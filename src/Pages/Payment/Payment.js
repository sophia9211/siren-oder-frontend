import React, { Component } from "react";
import HeaderDetail from "Components/Header/HeaderDetail";
import RadioButton from "Components/RadioButton";
import CheckboxCustom from "Components/Checkbox/CheckboxCustom";
import ArrowDiv from "Components/ArrowDiv";
import "./Payment.scss";

class Payment extends Component {
  render() {
    return (
      <div className="payment">
        <HeaderDetail link="/detailmenu">담기</HeaderDetail>
        <div className="payment_lists">
          <div className="payment_title">주문 매장</div>
          <div className="payment_store">111</div>

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
          <div className="payment_menu">
            <div className="menu_lists">
              <div className="menu_lists_total">
                <div>아이스 아메리카노</div>
                <div />
                <div className="menu_lists_img">
                  <img
                    src="https://cdn0.iconfinder.com/data/icons/slim-square-icons-basics/100/basics-07-256.png"
                    alt="up_arrow"
                  />
                </div>
              </div>
              <div>4000원</div>
            </div>

            <div className="menu_lists_detail">ICED / Tall / 머그컵</div>
          </div>
          <div className="payment_count">555</div>
          <div className="payment_btn">66</div>
        </div>
      </div>
    );
  }
}

export default Payment;
