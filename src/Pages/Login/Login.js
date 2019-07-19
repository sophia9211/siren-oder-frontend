import React, { Component } from "react";
import "./Login.scss";
import { Link } from "react-router-dom";
import { LOGO, CLOSE_BTN, API_URL } from "Config/Config.js";
import { postA } from "utils/api";

class Login extends Component {
  state = {
    email: "",
    password: ""
  };

  clickLogin = e => {
    e.preventDefault();
    postA({
      path: "account/login",
      body: { email: this.state.email, password: this.state.password }
    });
    // fetch(`${API_URL}/account/login`, {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({
    //     email: this.state.email,
    //     password: this.state.password
    //   })
    // })
    //   .then(res => res.json())
    //   .then(data => {
    //     console.log(data);
    //     // if (data.error_code === "EMAIL_EXIST") {
    //     //   this.setState({
    //     //     email_text: "중복된 이메일입니다."
    //     //   });
    //     // } else if (data.message === "회원가입을 축하드립니다.") {
    //     //   alert("회원가입을 축하드립니다!! 로그인 페이지로 이동합니다.");
    //     //   this.props.history.push({
    //     //     pathname: "/login"
    //     //   });
    //     // } else {
    //     //   alert("죄송합니다. 회원가입을 다시 해주세요.");
    //     // }
    //   });
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
