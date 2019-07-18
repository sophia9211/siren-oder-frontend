import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./SignupStep1.scss";
import { LOGO, CLOSE_BTN } from "Config/Config.js";

class SignupStep1 extends Component {
  state = {
    check_all: false,
    check_fir: false,
    check_sec: false,
    check_thir: false
  };

  clickCheckAll = e => {
    this.setState({
      check_all: !this.state.check_all,
      check_fir: !this.state.check_fir,
      check_sec: !this.state.check_sec,
      check_thir: !this.state.check_thir
    });
  };

  clickCheckFir = () => {
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
            check_all: !this.state.check_all
          });
        }
      }
    );
    if (this.state.check_all) {
      this.setState({
        check_all: !this.state.check_all
      });
    }
  };

  clickCheckSec = () => {
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
            check_all: !this.state.check_all
          });
        }
      }
    );
    if (this.state.check_all) {
      this.setState({
        check_all: !this.state.check_all
      });
    }
  };

  clickCheckThir = () => {
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
            check_all: !this.state.check_all
          });
        }
      }
    );
    if (this.state.check_all) {
      this.setState({
        check_all: !this.state.check_all
      });
    }
  };

  render() {
    return (
      <div className="signup_container">
        <div className="signup_container_main">
          <Link to="/login" className="signup_close_btn">
            <img src={CLOSE_BTN} />
          </Link>
          <div className="signup_logo">
            <img src={LOGO} />
          </div>
          <div className="signup_text">
            <p>
              고객님 <br /> 환영합니다!
            </p>
          </div>
          <div className="signup_checkbox1">
            <div className="check_all">
              <label onChange={this.clickCheckAll}>
                <input type="checkbox" checked={this.state.check_all} />
                약관 전체동의
              </label>
            </div>
          </div>
          <div className="signup_checkbox2">
            <div>
              <label onChange={this.clickCheckFir}>
                <input type="checkbox" checked={this.state.check_fir} />
                이용약관 동의(필수)
              </label>
            </div>

            <div className="check_se">
              <label onChange={this.clickCheckSec}>
                <input type="checkbox" checked={this.state.check_sec} />
                개인정보 수집 및 이용동의(필수)
              </label>
            </div>

            <div>
              <label onChange={this.clickCheckThir}>
                <input type="checkbox" checked={this.state.check_thir} />
                E-mail 및 SMS 광고성 정보 수신동의(선택)
              </label>
            </div>
          </div>
          <div className="signup_btn">
            <input type="submit" value="다음" onClick={this.props.next} />
          </div>
        </div>
      </div>
    );
  }
}

export default SignupStep1;
