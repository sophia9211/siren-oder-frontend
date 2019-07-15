import React from "react";
import "./MainLayout.scss";
import Header from "Components/Header";

class MainLayout extends React.Component {
  render() {
    return (
      <div>
        <Header />
        {this.props.children}
      </div>
    );
  }
}

export default MainLayout;
