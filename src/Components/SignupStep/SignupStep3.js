import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./SignupStep3.scss";

class SignupStep3 extends Component {
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
              아이디와 비밀번호를 <br />
              입력해 주세요.
            </p>
          </div>
          <div className="signup_second_rdm1">
            <input
              label="이메일"
              name="email"
              type="email"
              placeholder="이메일"
              onChange={this.props.fill}
            />
            <input
              label="이름"
              name="name"
              type="text"
              placeholder="이름(한글 6자리 이내)"
              onChange={this.props.fill}
            />
            <input
              label="비밀번호"
              name="password"
              type="password"
              placeholder="비밀번호"
              onChange={this.props.fill}
            />
            <input type="password" placeholder="비밀번호 확인" />
            <div className="gender">
              <label>
                <input
                  label="남자"
                  type="radio"
                  name="gender"
                  value="남자"
                  onChange={this.props.fill}
                />
                남
              </label>
              <label>
                <input
                  type="radio"
                  value="여자"
                  label="여자"
                  name="gender"
                  onChange={this.props.fill}
                />
                여
              </label>
            </div>
          </div>
          <div className="signup_btn">
            <input type="submit" value="다음" onClick={this.props.click} />
          </div>
        </div>
      </div>
    );
  }
}

export default SignupStep3;
