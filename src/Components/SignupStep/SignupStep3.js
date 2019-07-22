import React, { Component } from "react";
import { Link } from "react-router-dom";
import { CLOSE_BTN } from "Config/Config.js";
import Inputbox from "../Inputbox";
import Button from "../Button";
import "./SignupStep3.scss";

class SignupStep3 extends Component {
  render() {
    const {
      email,
      name,
      password,
      password_chk,
      gender,
      fill,
      click
    } = this.props;

    return (
      <div className="signup_container">
        <div className="signup_container_flex">
          <Link to="/login" className="signup_close_btn">
            <img src={CLOSE_BTN} alt="닫기" />
          </Link>

          <div className="signup_thir_text">
            <p>
              아이디와 비밀번호를 <br />
              입력해 주세요.
            </p>
          </div>

          <div className="signup_thir_input">
            <Inputbox
              className="basic_input"
              name="email"
              type="email"
              placeholder="이메일"
              change={fill}
            />
            <Inputbox
              className="basic_input"
              name="name"
              type="text"
              placeholder="이름"
              change={fill}
            />
            <Inputbox
              className="basic_input"
              name="password"
              type="password"
              placeholder="비밀번호"
              change={fill}
            />
            <Inputbox
              className="basic_input"
              name="password_chk"
              type="password"
              placeholder="비밀번호 확인"
              change={fill}
            />
            <div className="gender">
              <span>성별</span>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="남자"
                  onChange={fill}
                />
                남
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="여자"
                  onChange={fill}
                />
                여
              </label>
            </div>
          </div>
        </div>
        {email && name && password && password_chk && gender ? (
          <Button className="submit_btn" value="회원가입" onClick={click} />
        ) : (
          <Button className="submit_btn_disabled" value="회원가입" />
        )}
      </div>
    );
  }
}

export default SignupStep3;
