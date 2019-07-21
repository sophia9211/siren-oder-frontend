import React, { Component } from "react";
import { connect } from "react-redux";
import AdminHeader from "Components/Header/AdminHeader";
import "./AdminSignup.scss";
import SelectBox from "Components/SelectBox";

class AdminSignup extends Component {
  state = {
    value: ""
  };

  componentDidMount() {}

  handleChange = e => {
    const value = e.target.value;
    const name = e.target.name;

    this.setState({
      [name]: value
    });
  };

  handleSignup = () => {
    const { user_name, phone_number } = this.state;
  };

  //select box
  handleSelectedChange = e => {
    console.log(e.target.value);
    const selectValue = e.target.value;
    const name = e.target.name;

    this.setState({
      [name]: selectValue
    });
  };

  render() {
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
              <div className="admin_password_chk">비밀확인</div>
              <input
                name="chk_password"
                type="password"
                className="employees_password_chk"
                onChange={this.handleChange}
              ></input>
            </div>
            <div className="wrap_admin_button">
              <button className="admin_cancle_btn" onClick={this.handleCancel}>
                취소
              </button>
              <button className="admin_signup_btn" onClick={this.handleSignup}>
                가입하기
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default AdminSignup;
