import React, { Component } from "react";
import { connect } from "react-redux";
import AdminHeader from "Components/Header/AdminHeader";
import "./AdminLogin.scss";
import SelectBox from "Components/SelectBox";
import { withRouter } from "react-router-dom";
import { auth } from "Actions/AuthAction";
import { ADDRESS, DJKLSAJFF, LOGO, ADDRESS1 } from "Config/Config.js";

class AdminLogin extends Component {
  state = {
    inputID: "",
    inputPassword: ""
  };
  //상태값 리덕스에서 관리
  componentDidMount = () => {
    //리덕스 컴포넌트 변경되었는지 확인.
    if (!window.Kakao.Link) {
      window.Kakao.init("a81d01b3bdfe45a0794edae07d009473");
    }
    window.Kakao.Auth.createLoginButton({
      container: "#kakao-login-btn",
      success: authObj => {
        let nomalToken = localStorage.getItem(DJKLSAJFF);
        let data = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: JSON.stringify(authObj["access_token"])
          }
        };
        this.sendAjax = async () => {
          let reqData = await fetch(ADDRESS1 + "account/employee/kakao", data);
          let result = await reqData.json();
          if (result.message === "SUCCESS") {
            this.props.history.push("/admin");
          }
        };
        this.sendAjax();
      },
      fail: function(err) {
        console.log(JSON.stringify(err));
      }
    });
  };

  handleSignup = () => {
    this.props.history.push("/admin/signup");
  };

  handleExploer = async () => {
    let sendData = {
      employee_code: "gosu111",
      password: "111111"
    };
    let data = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(sendData)
    };

    let reqData = await fetch(ADDRESS1 + "account/employee/login", data);
    let result = await reqData.json();
    let token = result.access_token;
    localStorage.setItem(DJKLSAJFF, token);
    alert("로그인하였습니다.");
    this.props.history.push("/admin");
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
      let reqData = await fetch(ADDRESS1 + "account/employee/login", data);
      let result = await reqData.json();

      if (result.message === "INVALID_EMPLOYEE") {
        alert("가입되지 않은 사용자입니다");
        window.location.reload();
      } else if (result.access_token) {
        alert("로그인하였습니다.");
        let token = result.access_token;
        localStorage.setItem(DJKLSAJFF, token);
        console.log("로그인1");
        this.props.history.push("/admin");
      }
    };

    this.sendAjax();
    this.props.onAuth();
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

          <div className="wrap_logo_information_text">
            <div className="logo"></div>
            <span className="information_text">
              안녕하세요.
              <br />
              스타벅스입니다.
            </span>
            <p>관리자 서비스 이용을 위해 로그인을 해주세요.</p>
            <div className="wrap_login_admin_info">
              <div className="wrap_number_input_box">
                <input
                  name="inputID"
                  type="text"
                  className="employees_numbers"
                  placeholder="사원번호"
                  onChange={this.handleChange}
                />
              </div>
              <div className="wrap_password_input_box">
                <input
                  name="inputPassword"
                  type="password"
                  className="employees_numbers"
                  placeholder="비밀번호"
                  onChange={this.handleChange}
                />
              </div>
              <div className="wrap_admin_button">
                <div className="wrap_admin_3button">
                  <button className="signup_btn" onClick={this.handleSignup}>
                    회원가입
                  </button>
                  <button className="login_btn" onClick={this.handleLogin}>
                    로그인
                  </button>
                  <button className="login_btn" onClick={this.handleExploer}>
                    둘러보기
                  </button>
                </div>
              </div>
              <a id="kakao-login-btn" onClick={this.handleKakao}></a>
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
