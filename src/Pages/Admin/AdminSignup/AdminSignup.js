import React, { Component } from "react";
import { connect } from "react-redux";
import AdminHeader from "Components/Header/AdminHeader";
import "./AdminSignup.scss";
import SelectBox from "Components/SelectBox";

class AdminSignup extends Component {
  state = {
    value: "",
    isSignupButtonInit: true
  };

  componentDidMount() {}

  handleChange = e => {
    console.log(e.target.value);
    const { password, chk_password } = this.state;
    const value = e.target.value;
    const name = e.target.name;

    this.setState({
      [name]: value,
      isSignupButtonInit: false
    });
    console.log(value);
    console.log(name);
  };

  //select box
  handleSelectedChange = e => {
    const selectValue = e.target.value;
    const name = e.target.name;
    this.setState({
      [name]: selectValue
    });
  };

  handleSignup = () => {
    const {
      gun,
      gu,
      grade,
      where_position,
      user_name,
      phone_number,
      employees_number,
      password,
      chk_password
    } = this.state;

    if (
      gun &&
      gu &&
      grade &&
      where_position &&
      user_name &&
      phone_number &&
      employees_number &&
      password &&
      chk_password
    ) {
      let data = {
        gun: gun,
        gu: gu,
        where_position: where_position,
        grade: grade === "지점장" ? true : false,
        user_name: user_name,
        phone_number: phone_number,
        employees_numbers: employees_number,
        employees_password: password,
        employees_password_chk: chk_password
      };

      let sendData = {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      };
      //fetch 할부분. 가입하면 로그인화면으로 보내기
    } else {
      alert("빈칸이 없어야 합니다.");
    }
  };

  render() {
    const { password, chk_password, isSignupButtonInit } = this.state;
    return (
      <>
        <div className="root_admin_login">
          <AdminHeader
            imgClassName="login_img_name"
            logoTitleName="title_logo_name"
          />
          <div className="wrap_login_admin_info_signup">
            <div className="wrap_locations">
              <div className="location_city">군/구</div>
              <SelectBox
                selectName="gun"
                handleSelectedChange={this.handleSelectedChange}
              />
              <SelectBox
                selectName="gu"
                handleSelectedChange={this.handleSelectedChange}
              />
            </div>
            <div className="wrap_location_select_box">
              <div className="location_admin">지점/위치</div>
              <SelectBox
                selectName="where_position"
                handleSelectedChange={this.handleSelectedChange}
                location1="선릉역점"
                location2="선릉역 1호점"
                location3="선릉역 3호점"
              />
            </div>
            <div className="wrap_position_select_box">
              <div className="admin_position">직책/직급</div>
              <SelectBox
                selectName="grade"
                location1="매니져"
                location2="지점장"
                handleSelectedChange={this.handleSelectedChange}
              />
            </div>
            <div className="wrap_number_input_box">
              <div className="admin_user_name">이름</div>
              <input
                name="user_name"
                type="text"
                className="employees_user_name"
                onChange={this.handleChange}
              ></input>
            </div>
            <div className="wrap_number_input_box">
              <div className="admin_number">전화번호</div>
              <input
                name="phone_number"
                type="text"
                className="employees_phone_number"
                onChange={this.handleChange}
              ></input>
            </div>
            <div className="wrap_number_input_box">
              <div className="admin_number">사원번호</div>
              <input
                name="employees_number"
                type="text"
                className="employees_numbers"
                onChange={this.handleChange}
              ></input>
            </div>
            <div className="wrap_password_input_box">
              <div className="admin_password">비밀번호</div>
              <input
                name="password"
                type="password"
                className="employees_password"
                onChange={this.handleChange}
              ></input>
            </div>
            <div className="wrap_password_input_box">
              <div className="admin_password_chk">비번확인</div>
              <input
                name="chk_password"
                type="password"
                className="employees_password_chk"
                onChange={this.handleChange}
              ></input>
            </div>
            {password !== chk_password ? (
              <p className="admin_chk_password">
                "비밀번호가 일치하지 않습니다"
              </p>
            ) : (
              ""
            )}
            <div className="wrap_admin_button">
              <button className="admin_cancle_btn" onClick={this.handleCancel}>
                취소
              </button>
              {isSignupButtonInit && (
                <button className={"admin_signup_btn_disable"}>가입하기</button>
              )}
              {!isSignupButtonInit && (
                <button
                  className={
                    password === chk_password
                      ? "admin_signup_btn"
                      : "admin_signup_btn_disable"
                  }
                  onClick={this.handleSignup}
                >
                  가입하기
                </button>
              )}
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default AdminSignup;
