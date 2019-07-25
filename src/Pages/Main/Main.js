import React from "react";
import "./Main.scss";

import FixedFooter from "Components/FixedFooter";
import { Link } from "react-router-dom";
import Header from "Components/Header";

class Main extends React.Component {
  state = {
    class: ""
  };

  // timmOut = () => {
  //   setTimeout(() => {
  //     this.
  //   }, 1000);
  // };

  render() {
    return (
      <div>
        <Header />
        <div className="main_background_img ">
          <span className="starbucks_main_background_logo" />
        </div>
        <div className="main_login_box">
          <div className="main_login_texts_box">
            <p className={`main_text_change ${this.state.class}`}>
              스타벅스만의 특별한 혜택, 마이 스타벅스 리워드
            </p>
            <p className="main_text_change">
              스타벅스 회원이세요? 로그인을 통해 나만의 리워드를 확인해 보세요.
            </p>
            <p className="main_text_change">
              스타벅스 회원이 아니세요? 회원가입을 통해 리워드 혜택을 즐기세요.
            </p>
          </div>

          <div className="main_login_btn_box">
            <div className="main_login_btn">회원가입</div>
            <div className="main_login_btn">로그인</div>
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
