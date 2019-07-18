import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./SignupStep2.scss";

class SignupStep2 extends Component {
  render() {
    return (
      <div className="signup_second_container">
        <div className="signup_second_container_main">
          <Link to="/login" className="signup_close_btn">
            <img
              src={
                "https://cdn0.iconfinder.com/data/icons/solid-line-essential-ui-icon-set/512/essential_set_close-256.png"
              }
            />
          </Link>
          <div className="signup_second_text">
            <p>
              본인확인을 위해 <br />
              인증을 진행해 주세요.
            </p>
          </div>
          <div className="signup_second_check">
            <div>
              <label>
                <input type="checkbox" />
                본인 인증 서비스 약관 전체동의
              </label>
              <p>휴대폰 본인 인증 서비스 이용약관 동의(필수)</p>
              <p>휴대폰 통신사 이용약관 동의(필수)</p>
              <p>개인정보 제공 및 이용 동의(필수)</p>
              <p>고유식별정보 처리(필수)</p>
            </div>
          </div>
          <div className="signup_second_rdm">
            <input
              label="휴대폰 번호"
              name="phone"
              type="tel"
              placeholder="휴대폰 번호"
              onChange={this.props.fill}
            />
            <input type="number" placeholder="인증번호" />
            <button>인증요청</button>
          </div>
          <div className="signup_second_text2">
            <p>
              타인의 개인정보를 도용하여 가입한 경우, 서비스 이용 제한 및 법적
              제재를 받으실 수 있습니다.
            </p>
          </div>
          <div className="signup_btn">
            <input type="submit" value="다음" onClick={this.props.next} />
          </div>
        </div>
      </div>
    );
  }
}

export default SignupStep2;
