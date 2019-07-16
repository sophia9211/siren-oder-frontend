import React, { Component } from "react";
import "./Signup.scss";
import { Link } from "react-router-dom";

class Signup extends Component {
  state = {
    check: ""
  };
  clickCheckAll = e => {
    console.log(this.state.check);
    this.setState({
      check: false
    });
  };
  render() {
    return (
      <div className="signup_container">
        <div className="signup_container_main">
          <Link to="/login">X</Link>
          <div className="signup_logo">
            <img src="http://img.khan.co.kr/news/2017/09/20/l_2017092001002683700218211.jpg" />
          </div>
          <div className="signup_text">
            <p>
              고객님 <br /> 환영합니다!
            </p>
          </div>
          <div className="signup_checkbox">
            <div className="chk_all" onChange={this.clickCheckAll}>
              <label>
                {/*라벨과 인풋의 위치만으로 어디를 클릭 했을때 체크되는지 확인 가능*/}
                <input type="checkbox" />
                약관 전체동의
              </label>
            </div>
            <div>
              <label>
                <input type="checkbox" checked={this.state.check} />
                이용약관 동의(필수)
              </label>
            </div>
            <div>
              <label>
                <input type="checkbox" />
                개인정보 수집 및 이용동의(필수)
              </label>
            </div>
            <div className="chk_select">
              <label>
                <input type="checkbox" />
                E-mail 및 SMS 광고성 정보 수신동의(선택)
              </label>
            </div>
          </div>
          <div className="signup_btn">
            <input type="submit" value="다음" />
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;
