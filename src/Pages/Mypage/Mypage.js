import React, { Component } from "react";
import "../Main/Main.scss";
import "./Mypage.scss";
import MainLayout from "Layouts/MainLayout";
import { PROFILE_IMG, RKXHSKZMS, API_URL } from "Config/Config.js";
import { post } from "Utils/api.js";

class Mypage extends Component {
  state = {
    name: "",
    email: ""
  };

  componentDidMount() {
    // let token = localStorage.getItem(RKXHSKZMS);
    let email = localStorage.getItem("email");
    let name = localStorage.getItem("name");
    this.setState({
      name: name,
      email: email
    });
  }

  changePw = () => {
    post({
      path: "account/login",
      body: { email: this.state.email, password: this.state.password }
    }).then(res => {});
  };

  changePhone = () => {};
  render() {
    return (
      <MainLayout>
        <div className="mypage_container">
          <div className="profile_fir">
            <img src={PROFILE_IMG} alt="유저 프로필" />
            <input type="text" value={this.state.name} />
          </div>

          <div className="profile_sec">
            <div className="profile_email">
              <label>이메일</label>
              <input type="email" value={this.state.email} />
            </div>

            <div className="profile_pw">
              <label>비밀번호</label>
              <input type="password" />
              <button onClick={this.changePw}>변경</button>
            </div>

            <div className="profile_phone">
              <label>휴대폰 인증</label>
              <p>주문정보의 연락처로 사용됩니다.</p>
              <input />
              <button onClick={this.changePhone}>재인증</button>
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
