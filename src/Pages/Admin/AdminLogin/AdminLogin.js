import React, { Component } from "react";
import "./AdminLogin.scss";
import { connect } from "react-redux";
import AdminHeader from "Components/Header/AdminHeader";
import "./AdminLogin.scss";
import SelectBox from "Components/SelectBox";
import AdminFooter from "Components/FixedFooter/AdminFooter";

class AdminLogin extends Component {
  render() {
    return (
      <>
        <div className="root_admin_login">
          <AdminHeader />
          <div className="wrap_login_admin_info">
            <div className="wrap_location_select_box">
              <div className="location_admin">지점/위치</div>
              <SelectBox
                location1="선릉역점"
                location2="선릉역 1호점"
                location3="선릉역 3호점"
              />
            </div>
            <div className="wrap_position_select_box">
              <div className="admin_position">직책/직급</div>
              <SelectBox location1="매니져" location2="지점장" />
            </div>
            <div className="wrap_number_input_box">
              <div className="admin_number">사원번호</div>
              <input type="text" className="employees_numbers"></input>
            </div>
            <div className="wrap_password_input_box">
              <div className="admin_password">비밀번호</div>
              <input type="password" className="employees_numbers"></input>
            </div>
            <div className="wrap_admin_button">
              <button className="signup_btn">회원가입</button>
              <button className="login_btn">로그인</button>
            </div>
          </div>
        </div>
        <footer className="admin_login_footer"></footer>
      </>
    );
  }
}
export default AdminLogin;
