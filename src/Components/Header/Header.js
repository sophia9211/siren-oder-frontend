import React from "react";
import "./Header.scss";

class Header extends React.Component {
  render() {
    return (
      <div>
        <div className="Header_box">
          <div className="Header_angel_logo"></div>
          <div className="Header_text_logo"></div>
          <div className="Header_search_icon"></div>
          <div className="Header_shopping_icon"></div>
        </div>
      </div>
    );
  }
}

export default Header;
