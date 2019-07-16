import React, { Component } from "react";
import "./Admin.scss";
import MenuCard from "../../Components/MenuCard";
import ameri from "../../Style/testImg/americano.jpg";

class Admin extends Component {
  render() {
    return (
      <>
        <header className="root_header_admin">
          <div className="header_logo">adminPage</div>
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
              <div className="oder_list_box">1</div>
              <div className="wrap_menu_card_customer">
                <MenuCard menuImg={ameri} menuName="아메리카노">
                  <div className="oder_customer">닉네임 : 레오</div>
                  <div className="wrap_button">
                    <button className="ready_order_btn">준비중</button>
                    <button className="finish_order_btn">완료</button>
                  </div>
                </MenuCard>
              </div>
            </div>
            <div className="wrap_order_list_graph"></div>
          </div>
        </div>
      </>
    );
  }
}

export default Admin;
