import React from "react";
import "./MainLayout.scss";
import Header from "Components/Header";
import FixedFooter from "Components/FixedFooter";

class MainLayout extends React.Component {
  render() {
    return (
      <div>
        <Header />
        {this.props.children}
        <FixedFooter />
      </div>
    );
  }
}

export default MainLayout;
