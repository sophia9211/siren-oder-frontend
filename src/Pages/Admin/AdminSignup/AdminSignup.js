import React, { Component } from "react";
import { connect } from "react-redux";
import AdminHeader from "Components/Header/AdminHeader";
import "./AdminSignup.scss";
import SelectBox from "Components/SelectBox";

class AdminSignup extends Component {
  render() {
    return (
      <>
        <div className="root_admin_login">
          <AdminHeader />
          <div className="wrap_login_admin_info">
            <div className="wrap_locations">
              <div className="location_city">군/구</div>
              <SelectBox />
              <SelectBox />
            </div>
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
              <div className="admin_user_name">이름</div>
              <input type="text" className="employees_numbers"></input>
            </div>
            <div className="wrap_number_input_box">
              <div className="admin_number">전화번호</div>
              <input type="text" className="employees_numbers"></input>
            </div>
            <div className="wrap_number_input_box">
              <div className="admin_number">사원번호</div>
              <input type="text" className="employees_numbers"></input>
            </div>
            <div className="wrap_password_input_box">
              <div className="admin_password">비밀번호</div>
              <input type="password" className="employees_numbers"></input>
            </div>
            <div className="wrap_password_input_box">
              <div className="admin_password_chk">비밀확인</div>
              <input type="password" className="employees_numbers"></input>
            </div>
            <div className="wrap_admin_button">
              <button className="admin_cancle_btn">취소</button>
              <button className="admin_signup_btn">가입하기</button>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default AdminSignup;
