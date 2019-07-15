import React, { Component } from "react";
import "./Login.scss";
import { Link } from "react-router-dom";

class Login extends Component {
  render() {
    return (
      <div>
        <div className="login_container">
          <div className="login_logo">
            <img src="http://img.khan.co.kr/news/2017/09/20/l_2017092001002683700218211.jpg" />
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
            <input type="text" placeholder="아이디" />
            <input type="password" placeholder="비밀번호" />
          </div>
          <div className="login_link">
            <Link>회원가입</Link>
          </div>
          <div className="login_btn">
            <input type="submit" value="로그인하기" />
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
