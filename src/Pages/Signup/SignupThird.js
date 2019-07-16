import React, { Component } from "react";
import "./Signup.scss";
import { Link } from "react-router-dom";

class SignupThird extends Component {
  render() {
    return (
      <div className="signup_second_container">
        <div className="signup_second_container_main">
          <div className="signup_second_texx">
            <p>
              아이디와 비밀번호를 <br />
              입력해 주세요.
            </p>
          </div>
          <div>
            <input type="text" placeholder="아이디 (4~13자리 이내)" />
            <input type="password" placeholder="아이디 (10~20자리 이내)" />
            <input type="password" placeholder="비밀번호 확인" />
          </div>
          <Link to="/signup/fourth">다음</Link>
        </div>
      </div>
    );
  }
}

export default SignupThird;
