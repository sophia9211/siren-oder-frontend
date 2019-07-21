import React, { Component } from "react";
import { Link } from "react-router-dom";
import Checkbox from "../Checkbox";
import Button from "../Button";
import "./SignupStep1.scss";
import { LOGO, CLOSE_BTN } from "Config/Config.js";

class SignupStep1 extends Component {
  state = {
    check_all: false,
    check_fir: false,
    check_sec: false,
    check_thir: false
  };

  clickCheckAll = () => {
    this.setState({
      check_all: !this.state.check_all,
      check_fir: !this.state.check_all,
      check_sec: !this.state.check_all,
      check_thir: !this.state.check_all
    });
  };

  clickCheckFir = () => {
    let forCheck = this.state.check_all;
    this.setState(
      {
        check_fir: !this.state.check_fir
      },
      () => {
        if (
          this.state.check_fir &&
          this.state.check_sec &&
          this.state.check_thir
        ) {
          this.setState({
            check_all: !forCheck
          });
        }
      }
    );
    if (forCheck) {
      this.setState({
        check_all: !forCheck
      });
    }
  };

  clickCheckSec = () => {
    let forCheck = this.state.check_all;
    this.setState(
      {
        check_sec: !this.state.check_sec
      },
      () => {
        if (
          this.state.check_fir &&
          this.state.check_sec &&
          this.state.check_thir
        ) {
          this.setState({
            check_all: !forCheck
          });
        }
      }
    );
    if (forCheck) {
      this.setState({
        check_all: !forCheck
      });
    }
  };

  clickCheckThir = () => {
    let forCheck = this.state.check_all;
    this.setState(
      {
        check_thir: !this.state.check_thir
      },
      () => {
        if (
          this.state.check_fir &&
          this.state.check_sec &&
          this.state.check_thir
        ) {
          this.setState({
            check_all: !forCheck
          });
        }
      }
    );
    if (forCheck) {
      this.setState({
        check_all: !forCheck
      });
    }
  };

  render() {
    const { check_all, check_fir, check_sec, check_thir } = this.state;
    return (
      <div className="signup_container">
        <div className="signup_container_flex">
          <Link to="/login" className="signup_close_btn">
            <img src={CLOSE_BTN} alt="닫기" />
          </Link>

          <div className="signup_logo">
            <img src={LOGO} alt="로고" />
          </div>

          <div className="signup_text">
            <p>
              고객님 <br /> 환영합니다!
            </p>
          </div>

          <div className="signup_checkbox_all">
            <Checkbox
              className="check"
              agree={this.clickCheckAll}
              check={check_all}
            >
              약관 전체동의
            </Checkbox>
          </div>

          <Checkbox
            className="check"
            agree={this.clickCheckFir}
            check={check_fir}
          >
            이용약관 동의(필수)
          </Checkbox>

          <Checkbox
            className="check"
            agree={this.clickCheckSec}
            check={check_sec}
          >
            개인정보 수집 및 이용동의(필수)
          </Checkbox>

          <Checkbox
            className="check"
            agree={this.clickCheckThir}
            check={check_thir}
          >
            E-mail 및 SMS 광고성 정보 수신동의(선택)
          </Checkbox>
        </div>
        {check_fir && check_sec ? (
          <Button
            className="submit_btn"
            value="다음"
            onClick={this.props.next}
          />
        ) : (
          <Button className="submit_btn_disabled" value="다음" />
        )}
      </div>
    );
  }
}

export default SignupStep1;
