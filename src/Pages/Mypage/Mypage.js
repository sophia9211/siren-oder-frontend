import React, { Component } from "react";
import "../Main/Main.scss";
import "./Mypage.scss";
import MainLayout from "Layouts/MainLayout";
import { PROFILE_IMG } from "Config/Config.js";

class Mypage extends Component {
  render() {
    return (
      <MainLayout>
        <div className="mypage_container">
          <div className="profile_fir">
            <img src={PROFILE_IMG} alt="유저 프로필" />
            <input type="text" value="유저 이름" />
          </div>

          <div className="profile_sec">
            <div className="profile_email">
              <label>이메일</label>
              <input type="email" value="aa@aa.com" />
            </div>

            <div className="profile_pw">
              <label>비밀번호</label>
              <input type="password" />
              <button>변경</button>
            </div>

            <div className="profile_phone">
              <label>휴대폰 인증</label>
              <p>주문정보의 연락처로 사용됩니다.</p>
              <input />
              <button>재인증</button>
            </div>
          </div>

          <div className="profile_thir">
            <label>마케팅 정보 수신동의</label>
            <p>이벤트 및 혜택에 대한 정보를 받으실 수 있어요.</p>
            <div>
              <p>메일 수신동의</p>
              <button></button>
            </div>
            <div>
              <p>SMS 수신동의</p>
              <button></button>
            </div>
            <div>
              <button>회원탈퇴</button>
            </div>
          </div>
        </div>
      </MainLayout>
    );
  }
}

export default Mypage;
