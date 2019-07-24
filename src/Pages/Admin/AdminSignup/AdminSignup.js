import React, { Component } from "react";
import AdminHeader from "Components/Header/AdminHeader";
import "./AdminSignup.scss";
import SelectBox from "Components/SelectBox";
import { ADDRESS } from "Config/Config";
import { withRouter } from "react-router-dom";
class AdminSignup extends Component {
  state = {
    value: "",
    isSignupButtonInit: true,
    cityInfo: [],
    gunguInfo: "",
    locationInfo: "",
    gradeInfo: [
      { id: "지점장", name: "지점장" },
      { id: "매니져", name: "매니져" }
    ]
  };

  componentDidMount = async () => {
    this.getCity();
  };

  componentDidUpdate = async (previousProps, previousState) => {
    const { cityNum, gunguNum } = this.state;

    // console.log("componentDidUpdate props:", previousProps, this.props);
    // console.log("componentDidUpdate state:", previousState, this.state);

    //if (previousState.gunguInfo === this.state.gunguInfo) {
    if (cityNum && previousState.cityNum !== this.state.cityNum) {
      let getData = await fetch(ADDRESS + "store/gungu/" + cityNum);
      let gungu = await getData.json();

      this.setState({
        gunguInfo: gungu
      });
    }

    if (gunguNum && previousState.gunguNum !== this.state.gunguNum) {
      console.log("지점 불러오기");
      // const { gunguNum } = this.state;
      let getData = await fetch(ADDRESS + "store/shop/" + gunguNum);
      let getLocation = await getData.json();
      this.setState({
        locationInfo: getLocation
      });
    }
  };

  getCity = async () => {
    let getData = await fetch(ADDRESS + "store/sido");
    let getCity = await getData.json();
    this.setState({
      cityInfo: getCity
    });
  };

  handleChange = e => {
    const { password, chk_password } = this.state;
    const value = e.target.value;
    const name = e.target.name;

    this.setState({
      [name]: value,
      isSignupButtonInit: false
    });
  };

  //select box
  handleSelectedChange = e => {
    const selectValue = e.target.value;
    const name = e.target.name;
    console.log(name, selectValue);
    this.setState({
      [name]: selectValue
    });
  };

  handleCancle = () => {
    this.props.history.push("login");
  };

  handleSignup = () => {
    const {
      cityNum,
      gunguNum,
      grade,
      where_position,
      user_name,
      phone_number,
      employees_number,
      password,
      chk_password
    } = this.state;

    if (
      cityNum &&
      gunguNum &&
      grade &&
      where_position &&
      user_name &&
      phone_number &&
      employees_number &&
      password &&
      chk_password
    ) {
      console.log(grade);
      let data = {
        city: cityNum,
        gungu: gunguNum,
        store_id: where_position,
        grade: grade,
        name: user_name,
        phone_number: phone_number,
        employee_code: employees_number,
        password: password
      };
      console.log(this.state.data);
      let sendData = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json"
        }
      };

      console.log(sendData);

      this.sendAjax = async () => {
        let reqData = await fetch(ADDRESS + "account/employee", sendData);
        let getMessage = await reqData.json();
        console.log(getMessage); //왜 이늠은 안가지?
        if (getMessage.message === "SUCCESS") {
          alert("회원가입을 축하드립니다.");
          this.props.history.push("/admin/login");
        }
      };

      this.sendAjax();
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
              <div className="location_city">시/군구</div>
              {
                <SelectBox
                  selectName="cityNum"
                  locationList={this.state.cityInfo}
                  handleSelectedChange={this.handleSelectedChange}
                />
              }
              <SelectBox
                selectName="gunguNum"
                locationList={this.state.gunguInfo}
                handleSelectedChange={this.handleSelectedChange}
              />
            </div>
            <div className="wrap_location_select_box">
              <div className="location_admin">지점/위치</div>
              <SelectBox
                selectName="where_position"
                locationList={this.state.locationInfo}
                handleSelectedChange={this.handleSelectedChange}
              />
            </div>
            <div className="wrap_position_select_box">
              <div className="admin_position">직책/직급</div>
              <SelectBox
                selectName="grade"
                locationList={this.state.gradeInfo}
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
              <button className="admin_cancle_btn" onClick={this.handleCancle}>
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
export default withRouter(AdminSignup);
