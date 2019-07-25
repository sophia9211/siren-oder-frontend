import React, { Component } from "react";
import SignupStep1 from "Components/SignupStep/SignupStep1";
import SignupStep2 from "Components/SignupStep/SignupStep2";
import SignupStep3 from "Components/SignupStep/SignupStep3";
import "./Signup.scss";
// import { API_URL } from "Config/Config.js";
import { post } from "Utils/api.js";

class Signup extends Component {
  state = {
    step: 1,
    email: "",
    name: "",
    phone: "",
    rdm_num: "",
    password: "",
    password_chk: "",
    gender: "",
    showImg: "hideImg"
  };

  callNext = e => {
    // get({
    //   path: "store/sido"
    // }).then(res => {
    //   console.log(res.data);
    // });

    this.setState({
      step: this.state.step + 1
    });
  };

  clickSign = e => {
    const { email, name, phone, gender, password, password_chk } = this.state;
    // e.preventDefault();
    if (password.length < 6) {
      alert("비밀번호는 6자리 이상입니다.");
    } else if (password !== password_chk) {
      alert("비밀번호를 다시 입력해주세요.");
    }
    console.log(email, name, password, phone, gender);
    post({
      path: "account",
      body: {
        email: email,
        name: name,
        password: password,
        phone_number: phone,
        gender: gender
      }
    }).then(res => {
      // console.log(res);
      if (res.data.message === "DUPLICATE_EMAIL") {
        alert("중복된 이메일입니다.");
      } else if (res.data.message === "SUCCESS") {
        alert("회원가입을 축하드립니다!! 로그인 페이지로 이동합니다.");
        this.props.history.push({
          pathname: "/login"
        });
      } else {
        alert("죄송합니다. 회원가입을 다시 해주세요.");
      }
    });
  };

  fillInput = e => {
    this.setState(
      {
        [e.target.name]: e.target.value
      },
      () => {
        // console.log(this.state.gender);
      }
    );
  };

  render() {
    const {
      step,
      email,
      name,
      phone,
      rdm_num,
      password,
      password_chk,
      gender
    } = this.state;
    const matchingStep = {
      1: <SignupStep1 next={this.callNext} changeActive={this.changeActive} />,
      2: (
        <SignupStep2
          next={this.callNext}
          fill={this.fillInput}
          phone={phone}
          rdm_num={rdm_num}
        />
      ),
      3: (
        <SignupStep3
          email={email}
          name={name}
          password={password}
          password_chk={password_chk}
          gender={gender}
          fill={this.fillInput}
          click={this.clickSign}
        />
      )
    };

    return matchingStep[step];
  }
}

export default Signup;
