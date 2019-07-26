import React from "react";
import "./Header.scss";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";

class Header extends React.Component {
  moveToCart = () => {
    if (!localStorage.getItem("data")) {
      alert("장바구니가 텅~ 비어있습니다.");
    } else {
      this.props.history.push({
        pathname: "./shoppingcart"
      });
    }
  };
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
          <div>
            <div
              onClick={this.moveToCart}
              className="header_shopping_icon"
            ></div>
          </div>
        </div>
      </header>
    );
  }
}

export default withRouter(Header);
