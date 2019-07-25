import React from "react";
import "./MainLayout.scss";
import Header from "Components/Header";

class MainLayout extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className="main_contain_box">{this.props.children}</div>
      </div>
    );
  }
}

export default MainLayout;
