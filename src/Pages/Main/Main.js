import React from "react";
import "./Main.scss";
import FixedFooter from "Components/FixedFooter";
import { Link } from "react-router-dom";
import { RKXHSKZMS } from "Config/Config.js";
import Header from "Components/Header";

const textArr = [
  {
    text: "스타벅스만의 특별한 혜택, 마이 스타벅스 리워드"
  },
  {
    text: "스타벅스 회원이세요? 로그인을 통해 나만의 리워드를 확인해 보세요."
  },
  {
    text: "스타벅스 회원아니세요? 가입을 통해 리워드 혜택을 즐기세요."
  }
];

class Main extends React.Component {
  state = {
    count: ""
  };

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  getText = textArr => {
    if (textArr.length > 1) {
      let count = 0;
      this.intervalId = setInterval(() => {
        this.setState({
          count: count
        });
        count++;
        if (count > 2) {
          return (count = 0);
        }
      }, 3000);
      console.log(this.state.text);
    }
  };
  componentDidMount() {
    this.getText(textArr);
  }

  logout = () => {
    localStorage.removeItem(RKXHSKZMS);
    localStorage.removeItem("email");
    localStorage.removeItem("name");
  };

  goMypage = () => {
    if (localStorage.getItem("email")) {
      this.props.history.push({
        pathname: "/mypage"
      });
    } else {
      alert("일반 회원가입을 해주세요.");
    }
  };

  render() {
    return (
      <div>
        <Header />
        <div className="main_background_img ">
          <span className="starbucks_main_background_logo" />
        </div>
        <div className="main_login_box">
          <div className="main_login_texts_box">
            <p
              className={this.state.count === 0 ? "main_text_change" : ""}
              style={
                this.state.count === 0
                  ? { display: "flex" }
                  : { display: "none" }
              }
            >
              스타벅스만의 특별한 혜택, 마이 스타벅스 리워드
            </p>
            <p
              className={this.state.count === 1 ? "main_text_change" : ""}
              style={
                this.state.count === 1
                  ? { display: "flex" }
                  : { display: "none" }
              }
            >
              스타벅스 회원이세요? 로그인을 통해 나만의 리워드를 확인해 보세요.
            </p>
            <p
              className={this.state.count === 2 ? "main_text_change" : ""}
              style={
                this.state.count === 2
                  ? { display: "flex" }
                  : { display: "none" }
              }
            >
              스타벅스 회원아니세요? 가입을 통해 리워드 혜택을 즐기세요.
            </p>
          </div>

          <div>
            {!localStorage.getItem(RKXHSKZMS) ? (
              <div className="main_login_btn_box">
                <Link to="./signup" className="main_login_btn">
                  회원가입
                </Link>
                <Link to="./login" className="main_login_btn">
                  로그인
                </Link>
              </div>
            ) : (
              <div>
                <Link onClick={this.goMypage} className="main_login_btn">
                  마이페이지
                </Link>
                <Link onClick={this.logout} className="main_login_btn">
                  로그아웃
                </Link>
              </div>
            )}
          </div>
        </div>
        <div className="main_coffee_background_img">
          <span className="main_coffee_img" />
          <div className="main_coffee_text_img_box">
            <span className="main_coffee_text_img" />
            <span className="main_coffee_sub_text_img" />
            <Link to="/TotalMenu">
              <span className="main_meun_btn">전체메뉴 자세히 보기</span>
            </Link>
          </div>
        </div>

        <FixedFooter />
      </div>
    );
  }
}
export default Main;
