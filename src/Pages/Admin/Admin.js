import React, { Component } from "react";
import "./Admin.scss";
import MenuCard from "../../Components/MenuCard";
import ameri from "../../Style/testImg/americano.jpg";
import logo from "../../Style/img/sLogo.png";
import title from "../../Style/img/tLogo.png";
class Admin extends Component {
  state = {};

  handleClick = () => {};

  render() {
    return (
      <>
        <header className="root_header_admin">
          <div className="header_logo">
            <img src={logo} />
          </div>
          <div className="title_logo">
            <img src={title} />
            <span className="title_logo_name">admin</span>
          </div>
          <div className="wrap_admin_user_info">
            <span className="admin_user_info">지점명</span>
            <span className="admin_user_info">선릉역</span>
            <span className="admin_user_info">직책명</span>
            <span className="admin_user_info">매니져</span>
            <span className="admin_user_info">관리자명</span>
            <span className="admin_user_info">아이유</span>
          </div>
          <button className="admin_login_button">로그아웃</button>
        </header>
        <div className="root_body_admin">
          <div className="wrap_order_list">
            <div className="order_list_title">주문목록</div>
            <div className="wrap_order_list_card">
              <div className="order_list_box">1</div>
              <MenuCard menuImg={ameri} />
              <div className="wrap_menu_card_customer">
                <div className="order_food">주문내용 : 아메리카노 1잔</div>
                <div className="order_customer">닉네임 : 레오</div>
                <div className="wrap_button">
                  <button className="ready_order_btn">준비중</button>
                  <button className="finish_order_btn">완료</button>
                </div>
              </div>
            </div>

            <div className="wrap_order_list_card">
              <div className="order_list_box">2</div>
              <MenuCard menuImg={ameri} />
              <div className="wrap_menu_card_customer">
                <div className="order_food">주문내용 : 아메리카노 1잔</div>
                <div className="order_customer">닉네임 : 레오</div>
                <div className="wrap_button">
                  <button className="ready_order_btn">준비중</button>
                  <button className="finish_order_btn">완료</button>
                </div>
              </div>
            </div>

            <div className="wrap_order_list_card">
              <div className="order_list_box">3</div>
              <MenuCard menuImg={ameri} />
              <div className="wrap_menu_card_customer">
                <div className="order_food">주문내용 : 아메리카노 1잔</div>
                <div className="order_customer">닉네임 : 레오</div>
                <div className="wrap_button">
                  <button
                    className="ready_order_btn"
                    name="ready"
                    onClick={this.handleClick}
                  >
                    준비중
                  </button>
                  <button
                    className="finish_order_btn"
                    name="complete"
                    onClick={this.handleClick}
                  >
                    완료
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="wrap_order_list_graph"></div>
        </div>
        <footer className="admin_footer">
          <div className="wrap_next_order_price">
            <div className="next_order">다음주문</div>
            <div className="next_order">카라멜마끼아또 0잔</div>
            <div className="today_sales_amount_title">금일판매금액</div>
            <div className="today_sales_amount">50000만</div>
            <div className="month_sales_amount_title">이번달누적판매금액</div>
            <div className="month_sales_amount">150000만</div>
          </div>
        </footer>
      </>
    );
  }
}

export default Admin;
