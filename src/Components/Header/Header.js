import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <header>
        <div className="header_box">
          <Link to="./">
            <div className="header_angel_logo"></div>
          </Link>
          <Link to="./">
            <div className="header_text_logo"></div>
          </Link>
          <div className="header_shopping_icon"></div>
        </div>
      </header>
    );
  }
}

export default Header;
