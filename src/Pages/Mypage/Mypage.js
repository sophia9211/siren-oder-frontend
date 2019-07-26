import React, { Component } from "react";
import "../Main/Main.scss";
import "./Mypage.scss";
import HeaderDetail from "Components/Header/HeaderDetail";
import RadioButton from "Components/RadioButton";
import { PROFILE_IMG, RKXHSKZMS, API_URL } from "Config/Config.js";

class Mypage extends Component {
  state = {
    name: "",
    email: "",
    newPw: "",
    token: "",
    password: "",
    radio: "radio_btn",
    radioa: "radio_btn"
  };

  componentDidMount() {
    let token = localStorage.getItem(RKXHSKZMS);
    let email = localStorage.getItem("email");
    let name = localStorage.getItem("name");

    this.setState({
      name: name,
      email: email,
      token: token
    });
  }

  fillInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  changePw = () => {
    fetch(`${API_URL}/account/login/chpw`, {
      method: "POST",
      headers: { Authorization: this.state.token },
      body: JSON.stringify({
        current_password: this.state.password,
        new_password: this.state.newPw
      })
    })
      .then(res => res.json())
      .then(data => {
        if (data.message === "SUCCESS") {
          alert("비밀번호가 변경되었습니다.");
        } else {
          alert("비밀번호를 다시 입력해주세요.");
        }
      });
  };

  handleRadio = () => {
    if (this.state.radio === "radio_btn") {
      this.setState({
        radio: "radio_btn_fill"
      });
    } else {
      this.setState({
        radio: "radio_btn"
      });
    }
  };

  handleRadioa = () => {
    if (this.state.radioa === "radio_btn") {
      this.setState({
        radioa: "radio_btn_fill"
      });
    } else {
      this.setState({
        radioa: "radio_btn"
      });
    }
  };

  render() {
    return (
      <div className="mypage">
        <div className="mypage_container">
          <HeaderDetail>마이페이지</HeaderDetail>
          <div className="profile_fir">
            <img src={PROFILE_IMG} alt="유저 프로필" />
            <p>{this.state.name} 고객님</p>
          </div>

          <div className="profile_email">
            <p>이메일</p>
            <p>{this.state.email}</p>
          </div>

          <div className="profile_pw">
            <p>비밀번호</p>
            <button onClick={this.changePw}>변경</button>
            <div className="present_pw">
              <span>현재 비밀번호 입력</span>
              <input
                type="password"
                name="password"
                onChange={this.fillInput}
              />
            </div>
            <div className="new_pw">
              <span>새로운 비밀번호 입력</span>
              <input type="password" name="newPw" onChange={this.fillInput} />
            </div>
          </div>

          <div className="profile_phone">
            <p>핸드폰 변경</p>
            <p>- 주문정보의 연락처로 사용됩니다.</p>
            <button onClick={this.changePw}>재인증</button>
            <div className="present_phone">
              <span>현재 핸드폰번호 입력</span>
              <input type="number" name="phone" onChange={this.fillInput} />
            </div>
            <div className="new_phone">
              <span>새로운 핸드폰번호 입력</span>
              <input type="number" name="newPhone" onChange={this.fillInput} />
            </div>
          </div>

          <div className="profile_thir">
            <p>마케팅 정보 수신동의</p>
            <p>이벤트 및 혜택에 대한 정보를 받으실 수 있어요.</p>
            <div className="agree_radio">
              <span onClick={this.handleRadio}>
                <RadioButton className={this.state.radio}></RadioButton>
              </span>
              <span>메일 수신동의</span>
            </div>
            <div className="agree_radio">
              <span onClick={this.handleRadioa}>
                <RadioButton className={this.state.radioa}></RadioButton>
              </span>
              <span>SMS 수신동의</span>
            </div>
            <div className="leave">
              <button>회원탈퇴</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Mypage;
