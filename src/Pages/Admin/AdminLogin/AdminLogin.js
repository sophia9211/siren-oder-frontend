import React, { Component } from "react";
import { connect } from "react-redux";
import AdminHeader from "Components/Header/AdminHeader";
import "./AdminLogin.scss";
import SelectBox from "Components/SelectBox";
import { withRouter } from "react-router-dom";
import { auth } from "Actions";

class AdminLogin extends Component {
  //상태값 리덕스에서 관리

  handleSignup = () => {};
  handleLogin = () => {};

  render() {
    return (
      <>
        <div className="root_admin_login">
          <AdminHeader
            imgClassName="login_img_name"
            logoTitleName="title_logo_name"
          />
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
              <div className="admin_number">사원번호</div>
              <input type="text" className="employees_numbers"></input>
            </div>
            <div className="wrap_password_input_box">
              <div className="admin_password">비밀번호</div>
              <input type="password" className="employees_numbers"></input>
            </div>
            <div className="wrap_admin_button">
              <button className="kakaoLogin">Kakao 로그인</button>
              <button className="signup_btn" onClick={this.handleSignup}>
                회원가입
              </button>
              <button className="login_btn" onClick={this.handleLogin}>
                로그인
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => ({
  isUserLogin: state.isUserLogin
});

const mapDispatchToProps = dispatch => ({
  onAuth: () => dispatch(auth.auth())
});

const AdminLogin = connect({
  mapStateToProps,
  mapDispatchToProps
})(AdminLogin);
export default withRouter(AdminLogin);
