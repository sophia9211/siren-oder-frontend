import React, { Component } from "react";
import "./Admin.scss";

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
            <div className="wrap_order_list_card"></div>
            <div className="wrap_order_list_graph"></div>
          </div>
        </div>
      </>
    );
  }
}

export default Admin;
