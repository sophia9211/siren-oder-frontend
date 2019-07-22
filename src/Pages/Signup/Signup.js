import React, { Component } from "react";
import SignupStep1 from "Components/SignupStep/SignupStep1";
import SignupStep2 from "Components/SignupStep/SignupStep2";
import SignupStep3 from "Components/SignupStep/SignupStep3";
import { API_URL } from "Config/Config.js";
import { post, get } from "utils/api";

class Signup extends Component {
  state = {
    step: 1,
    email: "",
    name: "",
    phone: "",
    password: "",
    gender: ""
  };

  callNext = e => {
    get({
      path: "store/sido"
    }).then(res => {
      console.log(res.data);
    });

    this.setState({
      step: this.state.step + 1
    });
  };

  clickSign = e => {
    e.preventDefault();
    post({
      path: "account",
      body: {
        email: this.state.email,
        name: this.state.name,
        password: this.state.password,
        phone_number: this.state.phone,
        gender: this.state.gender
      }
    }).then(res => {
      console.log(res.data);
    });
    // fetch(`${API_URL}/account`, {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({
    //     email: this.state.email,
    //     name: this.state.name,
    //     password: this.state.password,
    //     phone_number: this.state.phone,
    //     gender: this.state.gender
    //   })
    // })
    //   .then(res => res.json())
    //   .then(data => {
    //     console.log(data);
    //     // if (data.error_code === "EMAIL_EXIST") {
    //     //   this.setState({
    //     //     email_text: "중복된 이메일입니다."
    //     //   });
    //     // } else if (data.message === "회원가입을 축하드립니다.") {
    //     //   alert("회원가입을 축하드립니다!! 로그인 페이지로 이동합니다.");
    //     //   this.props.history.push({
    //     //     pathname: "/login"
    //     //   });
    //     // } else {
    //     //   alert("죄송합니다. 회원가입을 다시 해주세요.");
    //     // }
    //   });
  };

  fillInput = e => {
    this.setState(
      {
        [e.target.name]: e.target.value
      },
      () => {
        console.log(this.state.phone, this.state.name, this.state.gender);
      }
    );
  };

  // callPre = () => {
  //   this.setState({
  //     step: this.state.step - 1
  //   });
  // };

  render() {
    const matchingStep = {
      1: <SignupStep1 next={this.callNext} />,
      2: <SignupStep2 next={this.callNext} fill={this.fillInput} />,
      3: (
        <SignupStep3
          next={this.callNext}
          fill={this.fillInput}
          click={this.clickSign}
        />
      )
    };

    return matchingStep[this.state.step];
  }
}

export default Signup;
