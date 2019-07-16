import React, { Component } from "react";
import "./Signup.scss";
import { Link } from "react-router-dom";

class SignupSecond extends Component {
  render() {
    return (
      <div className="signup_second_container">
        <div className="signup_second_container_main">
          <div className="signup_second_texx">
            <p>
              본인확인을 위해 <br />
              인증을 진행해 주세요.
            </p>
          </div>
          <div className="signup_second_check"></div>
          <div className="signup_second_rdm">
            <input />
            <button>인증요청</button>
          </div>
          <div>
            <p>
              타인의 개인정보를 도용하여 가입한 경우, 서비스 이용 제한 및 법적
              제재를 받으실 수 있습니다.
            </p>
          </div>
          <Link to="/signup/third">다음</Link>
        </div>
      </div>
    );
  }
}

export default SignupSecond;
