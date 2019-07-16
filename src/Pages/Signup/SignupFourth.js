import React, { Component } from "react";
import "./Signup.scss";
import { Link } from "react-router-dom";

class SignupFourth extends Component {
  render() {
    return (
      <div className="signup_second_container">
        <div className="signup_second_container_main">
          <div className="signup_second_texx">
            <p>
              이메일을 <br />
              입력해 주세요.
            </p>
          </div>
          <div>
            <input type="email" placeholder="이메일" />
          </div>
          <div>
            <p>
              스타벅스커피 코리아의 새로운 서비스와 최신 이벤트 정보를 이메일로
              보내드려요
            </p>
            <p>
              주요 공지사항 및 이벤트 당첨안내 등 일부 소식은 수신동의 여부에
              관계없이 발송됩니다.
            </p>
          </div>
          <Link to="/signup/last">다음</Link>
        </div>
      </div>
    );
  }
}

export default SignupFourth;
