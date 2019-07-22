import React, { Component } from "react";
import "./Login.scss";
import { Link } from "react-router-dom";
import { LOGO, CLOSE_BTN, API_URL } from "Config/Config.js";
import { post } from "utils/api";

class Login extends Component {
  state = {
    email: "",
    password: ""
  };

  clickLogin = e => {
    e.preventDefault();
    post({
      path: "account/login",
      body: { email: this.state.email, password: this.state.password }
    });
  };

  fillLogin = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <div className="login_container">
        <div className="login_container_main">
          <div className="login_logo">
            <img src={LOGO} />
          </div>
          <div className="login_text1">
            <p>
              안녕하세요.
              <br />
              스타벅스입니다.
            </p>
          </div>
          <div className="login_text2">
            <p>회원 서비스 이용을 위해 로그인 해주세요.</p>
          </div>
          <div className="login_input">
            <input
              type="text"
              placeholder="이메일"
              label="이메일"
              name="email"
              onChange={this.fillLogin}
            />
            <input
              type="password"
              placeholder="비밀번호"
              label="비밀번호"
              name="password"
              onChange={this.fillLogin}
            />
          </div>
          <div className="login_link">
            <Link to="/signup">회원가입</Link>
          </div>
          <div className="login_btn">
            <input type="submit" value="로그인하기" onClick={this.clickLogin} />
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
