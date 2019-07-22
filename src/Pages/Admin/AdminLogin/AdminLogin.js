import React, { Component } from "react";
import { connect } from "react-redux";
import AdminHeader from "Components/Header/AdminHeader";
import "./AdminLogin.scss";
import SelectBox from "Components/SelectBox";
import { withRouter } from "react-router-dom";
import { auth } from "Actions/AuthAction";

class AdminLogin extends Component {
  //상태값 리덕스에서 관리
  componentDidUpdate() {
    //리덕스 컴포넌트 변경되었는지 확인.
    console.log(this.props);
  }

  handleSignup = () => {};
  handleLogin = () => {
    this.props.onAuth();
  };

  render() {
    return (
      <>
        <div className="root_admin_login">
          <AdminHeader
            imgClassName="login_img_name"
            logoTitleName="title_logo_name"
          />
          <div className="wrap_login_admin_info">
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
//키값은 props에서 확인.
const mapStateToProps = state => {
  return {
    isUserLogin: state.auth.isUserLogin
    // t; state.auth.t
  };
};
//위에꺼와 별개값
const mapDispatchToProps = dispatch => {
  return {
    //onAuth: t => dispatch(auth(t)),
    onAuth: () => dispatch(auth()) //dispatcher 실행함수
  };
};
//이내용을 컴포넌트화로 보내면 지금처럼 라우터부분에 보내면됨. 변수로 처리할꺼면 라우터부분에 변수가 들어가야함
AdminLogin = connect(
  mapStateToProps,
  mapDispatchToProps
)(AdminLogin);

export default withRouter(AdminLogin);
