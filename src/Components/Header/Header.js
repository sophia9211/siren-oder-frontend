import React from "react";
import "./Header.scss";

class Header extends React.Component {
  render() {
    return (
      <header>
        <div className="header_box">
          <div className="header_angel_logo"></div>
          <div className="header_text_logo"></div>
          <div className="header_search_icon"></div>
          <div className="header_shopping_icon"></div>
        </div>
      </header>
    );
  }
}

export default Header;
