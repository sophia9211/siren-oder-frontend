import React, { Component } from "react";
import { connect } from "react-redux";
import AdminHeader from "Components/Header/AdminHeader";
import "./AdminLogin.scss";
import SelectBox from "Components/SelectBox";
import { withRouter } from "react-router-dom";
import { auth } from "Actions/AuthAction";
import { ADDRESS, DJKLSAJFF } from "Config/Config.js";

class AdminLogin extends Component {
  //상태값 리덕스에서 관리
  componentDidUpdate() {
    //리덕스 컴포넌트 변경되었는지 확인.
  }

  handleSignup = () => {
    this.props.history.push("signup");
  };
  handleLogin = () => {
    const { inputID, inputPassword } = this.state;
    let sendData = {
      employee_code: inputID,
      password: inputPassword
    };

    let data = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(sendData)
    };

    this.sendAjax = async () => {
      let reqData = await fetch(ADDRESS + "account/employee/login", data);
      let result = await reqData.json();

      if (result.message === "INVALID_EMPLOYEE") {
        alert("가입되지 않은 사용자입니다");
        window.location.reload();
      } else if (result.access_token) {
        alert("로그인하였습니다.");
        let token = result.access_token;
        localStorage.setItem(DJKLSAJFF, token);
        this.props.history.push("/admin");
      }
    };

    this.sendAjax();
    this.props.onAuth();
    console.log(this.props.onAuth());
  };

  handleChange = e => {
    let value = e.target.value;
    let name = e.target.name;
    this.setState({
      [name]: value
    });
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
              <input
                name="inputID"
                type="text"
                className="employees_numbers"
                onChange={this.handleChange}
              />
            </div>
            <div className="wrap_password_input_box">
              <div className="admin_password">비밀번호</div>
              <input
                name="inputPassword"
                type="password"
                className="employees_numbers"
                onChange={this.handleChange}
              />
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
    // auth: state.auth
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
