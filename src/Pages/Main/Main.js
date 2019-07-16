import React from "react";
import "./Main.scss";
import MainLayout from "Layouts/MainLayout";
import { Link } from "react-router-dom";

class Main extends React.Component {
  render() {
    return (
      <MainLayout>
        <div className="main_contain_box">
          <div className="main_contain_button_box">
            <Link to="/TotalMenu">
              <span className="main_meun_btn">전체메뉴</span>
            </Link>
            <span className="main_history_btn">히스토리</span>
          </div>
        </div>
      </MainLayout>
    );
  }
}
export default Main;
