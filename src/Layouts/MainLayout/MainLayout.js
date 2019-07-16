import React from "react";
import "./MainLayout.scss";
import Header from "Components/Header";
import FixedFooter from "Components/FixedFooter";

class MainLayout extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className="main_contain_box">{this.props.children}</div>
        <FixedFooter />
      </div>
    );
  }
}

export default MainLayout;
