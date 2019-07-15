import React, { Component } from "react";
import "./Admin.scss";

class Admin extends Component {
  render() {
    return (
      <div className="root_header_admin">
        <div className="header_logo">adminPage</div>
        <div className="wrap_admin_user_info">
          <span className="admin_user_info center_name_title">지점명</span>
          <span className="admin_user_info center_name_name">선릉역</span>
          <span className="admin_user_info user_position_title">직책명</span>
          <span className="admin_user_info user_position_name">매니져</span>
          <span className="admin_user_info admin_user_name_title">
            관리자명
          </span>
          <span className="admin_user_info admin_user_name">아이유</span>
        </div>
        <button className="admin_login_button">로그아웃</button>
      </div>
    );
  }
}

export default Admin;
