import React, { Component } from "react";
import "./Login.scss";
import { Link } from "react-router-dom";
import Inputbox from "Components/Inputbox";
import Button from "Components/Button";
import { LOGO, CLOSE_BTN, RKXHSKZMS } from "Config/Config.js";
import { post } from "Utils/api";

class Login extends Component {
  state = {
    email: "",
    password: ""
  };

  clickLogin = e => {
    // e.preventDefault();
    post({
      path: "account/login",
      body: { email: this.state.email, password: this.state.password }
    }).then(data => {
      console.log(data);
      if (data.error_code === "EMAIL_NOT_FOUND") {
        this.setState({
          email_text: "존재하지 않는 이메일입니다."
        });
      } else if (data.access_token) {
        localStorage.setItem(RKXHSKZMS, data.access_token);
        console.log(data.access_token);
        this.props.history.push({
          pathname: "/"
        });
        alert("스타벅스에 오신 것을 환영합니다.");
      }
      //  else {
      //   this.setState({
      //     pw_text: "이메일 및 비밀번호를 확인해주세요."
      //   });
      // }
    });
  };

  fillLogin = e => {
    console.log(1);
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <div className="login_container">
        <div className="login_container_flex">
          <Link to="/" className="login_close_btn">
            <img src={CLOSE_BTN} alt="닫기" />
          </Link>
          <div className="login_logo">
            <img src={LOGO} alt="로그인 로고" />
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
            <Inputbox
              className="basic_input"
              name="email"
              type="email"
              placeholder="이메일"
              change={this.fillLogin}
            />
            <Inputbox
              className="basic_input"
              name="password"
              type="password"
              placeholder="비밀번호"
              change={this.fillLogin}
            />
          </div>
          <div className="login_link">
            <Link to="/signup">회원가입</Link>
          </div>
        </div>
        {this.state.email && this.state.password ? (
          <Button
            className="login_btn"
            value="로그인하기"
            onClick={this.clickLogin}
          />
        ) : (
          <Button className="login_btn_disabled" value="로그인하기" />
        )}
      </div>
    );
  }
}

export default Login;
