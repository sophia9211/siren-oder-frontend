import React, { Component } from "react";
import "./Login.scss";
import { Link } from "react-router-dom";
import Inputbox from "Components/Inputbox";
import Button from "Components/Button";
import { LOGO, CLOSE_BTN, RKXHSKZMS } from "Config/Config.js";
import { post } from "Utils/api.js";

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
    }).then(res => {
      console.log(res.data);
      if (res.data.message === "INVALID_EMAIL") {
        alert("존재하지 않는 이메일입니다.");
      } else if (res.data.access_token) {
        localStorage.setItem(RKXHSKZMS, res.data.access_token);
        localStorage.setItem("email", res.data.email);
        localStorage.setItem("name", res.data.user_name);
        this.props.history.push({
          pathname: "/"
        });
        alert("이제 맛있는 음료와 음식을 주문해주세요!");
      } else {
        alert("비밀번호를 확인해주세요.");
      }
    });
  };

  fillLogin = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  guestLogin = () => {
    post({
      path: "account/login",
      body: { email: "guest@test.com", password: "123456" }
    }).then(res => {
      if (res.data.access_token) {
        localStorage.setItem(RKXHSKZMS, res.data.access_token);
        this.props.history.push({
          pathname: "/"
        });
        alert("Guset로 로그인하셨습니다.");
      }
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
          <div className="signup_link">
            <Link to="/signup">회원가입</Link>
          </div>
          <div className="guest_login">
            <button onClick={this.guestLogin}>Guest로 로그인</button>
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
