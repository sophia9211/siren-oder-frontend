import React, { Component } from "react";
import { Link } from "react-router-dom";
import { CLOSE_BTN } from "Config/Config.js";
import Checkbox from "../Checkbox";
import Inputbox from "../Inputbox";
import Button from "../Button";
import "./SignupStep2.scss";

class SignupStep2 extends Component {
  state = {
    check_fourth: false
  };

  clickCheckFourth = () => {
    this.setState({
      check_fourth: !this.state.check_fourth
    });
  };

  render() {
    const { fill, next } = this.props;
    return (
      <div className="signup_container">
        <div className="signup_container_flex">
          <Link to="/login" className="signup_close_btn">
            <img src={CLOSE_BTN} alt="닫기" />
          </Link>

          <div className="signup_sec_text">
            <p>
              본인확인을 위해 <br />
              인증을 진행해 주세요.
            </p>
          </div>

          <div className="signup_sec_check">
            <Checkbox className="check" agree={this.clickCheckFourth}>
              본인 인증 서비스 약관 전체동의
            </Checkbox>
            <p>휴대폰 본인 인증 서비스 이용약관 동의(필수)</p>
            <p>휴대폰 통신사 이용약관 동의(필수)</p>
            <p>개인정보 제공 및 이용 동의(필수)</p>
            <p>고유식별정보 처리(필수)</p>
          </div>

          <div className="signup_sec_rdm">
            <Inputbox
              className="basic_input"
              name="phone"
              type="tel"
              placeholder="휴대폰 번호"
              change={fill}
            />
            <Inputbox
              className="short_input"
              name="rdm_num"
              type="number"
              placeholder="인증번호"
              change={fill}
            />
            <button className="req_btn">인증요청</button>
          </div>
          <div className="signup_sec_text2">
            <p>
              타인의 개인정보를 도용하여 가입한 경우, 서비스 이용 제한 및 법적
              제재를 받으실 수 있습니다.
            </p>
          </div>
        </div>
        {this.state.check_fourth && this.props.phone && this.props.rdm_num ? (
          <Button className="submit_btn" value="다음" onClick={next} />
        ) : (
          <Button className="submit_btn_disabled" value="다음" />
        )}
      </div>
    );
  }
}

export default SignupStep2;
