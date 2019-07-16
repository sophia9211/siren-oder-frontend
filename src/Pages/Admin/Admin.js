import React, { Component } from "react";
import "./Admin.scss";
import MenuCard from "Components/MenuCard";
import ameri from "Style/testImg/americano.jpg";
import logo from "Style/img/sLogo.png";
import title from "Style/img/tLogo.png";
import AdminHeader from "Components/Header/AdminHeader";
import OrderListCard from "Components/OrderListCard";
import AdminFooter from "Components/FixedFooter/AdminFooter";

class Admin extends Component {
  state = {};

  handleReadyClick = e => {
    console.log("클릭");
  };

  handleFinishClick = () => {
    console.log("로그아웃");
  };

  render() {
    return (
      <>
        <AdminHeader logoSrc={logo} titleSrc={title}>
          <div className="wrap_admin_user_info">
            <span className="admin_user_info">지점명</span>
            <span className="admin_user_info">선릉역</span>
            <span className="admin_user_info">직책명</span>
            <span className="admin_user_info">매니져</span>
            <span className="admin_user_info">관리자명</span>
            <span className="admin_user_info">아이유</span>
          </div>
          <button className="admin_login_button" onClick={this.handleLogIn}>
            로그아웃
          </button>
        </AdminHeader>

        <div className="root_body_admin">
          <div className="wrap_order_list">
            <div className="order_list_title">주문목록</div>
            <OrderListCard
              orderNum="1"
              menuImg={ameri}
              orderItem="아메리카노 1잔"
              orderUser="레오"
              handleReadyClick={this.handleReadyClick}
              handleFinishClick={this.handleFinishClick}
            />
          </div>
          <div className="wrap_order_list_graph"></div>
        </div>
        <AdminFooter
          nextOrder="카라멜 마끼야또 1잔"
          monthPrice="150,000원"
          todayPrice="50,000원"
        />
      </>
    );
  }
}

export default Admin;
