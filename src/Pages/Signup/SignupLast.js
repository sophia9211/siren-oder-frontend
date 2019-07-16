import React, { Component } from "react";
import "./Signup.scss";
import { Link } from "react-router-dom";

class SignupLast extends Component {
  render() {
    return (
      <div className="signup_second_container">
        <div className="signup_second_container_main">
          <div className="signup_second_texx">
            <p>
              닉네임을 <br />
              입력해 주세요.
            </p>
          </div>
          <div>
            <input type="text" placeholder="닉네임(한글 6자리 이내)" />
          </div>
          <div>
            <p>
              매장에서 주문한 메뉴를 찾으실 때, 등록한 닉네임으로 불러 드립니다.
            </p>
          </div>
          <div>
            <button>건너뛰기</button>
          </div>
          <input type="submit" value="디음" />
        </div>
      </div>
    );
  }
}

export default SignupLast;
